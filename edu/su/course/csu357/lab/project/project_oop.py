import mysql.connector
import getpass
import os
import platform
import shutil
from datetime import datetime
from faker import Faker

class StudentManagementSystem:
    def __init__(self):
        self.faker = Faker()
        self.connect_db()
        self.authenticate_user()

    @staticmethod
    def print_fancy_header(text):
        terminal_width = shutil.get_terminal_size().columns
        lines = text.strip().split('\n')
        top_left, top_right, bottom_left, bottom_right, horizontal, vertical = '╔', '╗', '╚', '╝', '═', '║'
        top_border = top_left + horizontal * (terminal_width - 2) + top_right
        bottom_border = bottom_left + horizontal * (terminal_width - 2) + bottom_right
        print(top_border)
        for line in lines:
            print(f"{vertical}{line.center(terminal_width - 2)}{vertical}")
        print(bottom_border)

    @staticmethod
    def print_centered(text):
        terminal_width = shutil.get_terminal_size().columns
        for line in text.strip().split('\n'):
            print(line.center(terminal_width))
        print()

    @staticmethod
    def clear_terminal():
        os.system("cls" if platform.system() == "Windows" else "clear")
        StudentManagementSystem.branding()

    @staticmethod
    def caesar_cipher(text, shift):
        return "".join(chr((ord(char) - ord('A' if char.isupper() else 'a') + shift) % 26 + ord('A' if char.isupper() else 'a')) for char in text)

    def connect_db(self):
        self.clear_terminal()
        self.print_centered("Database Connection Setup")
        db_user = input("Enter db username (default: root): ") or 'root'
        db_password = getpass.getpass("Enter db password: ")
        db_name = input("Enter database name (default: csu357_project): ") or 'csu357_project'
        db_host = input("Enter database host (default: localhost): ") or 'localhost'
        self.connection = mysql.connector.connect(host=db_host, user=db_user, passwd=db_password)
        self.cursor = self.connection.cursor(buffered=True)
        self.setup_database(db_name)
        self.connection.close()
        self.connection = mysql.connector.connect(host=db_host, user=db_user, passwd=db_password, database=db_name)

    def setup_database(self, db_name):
        self.cursor.execute(f"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '{db_name}'")
        if self.cursor.fetchone():
            self.print_centered("⚠️ ----WARNING: POTENTIAL DATA LOSS---- ⚠️")
            if input(f"Database '{db_name}' exists. DROP it? (y/n): ") == 'y':
                self.cursor.execute(f"DROP DATABASE {db_name}")
                self.connection.commit()
        self.cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
        self.connection.commit()

    def execute_query(self, query, data=None, commit=False):
        try:
            cursor = self.connection.cursor()
            cursor.execute(query, data)
            if commit:
                self.connection.commit()
            else:
                return cursor.fetchall() if cursor.with_rows else None
        except mysql.connector.Error as err:
            print(f"Error: {err}")
            if commit:
                self.connection.rollback()
        finally:
            cursor.close()

    def setup_tables(self):
        queries = [
            "CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, dept VARCHAR(255))",
            "CREATE TABLE IF NOT EXISTS courses (course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(255), course_duration VARCHAR(255))",
            "CREATE TABLE IF NOT EXISTS enrollments (enrollment_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, enrollment_date DATE, FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))",
            "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), role VARCHAR(255))",
            "CREATE TABLE IF NOT EXISTS grades (grade_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, grade CHAR(2), FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))"
        ]
        for query in queries:
            self.execute_query(query, commit=True)
        self.default_admin_user()

    def default_admin_user(self):
        if not self.execute_query("SELECT EXISTS(SELECT 1 FROM users LIMIT 1)")[0][0]:
            self.execute_query("INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", ('admin', self.caesar_cipher('password', 3), 'admin'), True)

    def authenticate_user(self):
        self.clear_terminal()
        self.setup_tables()
        username = input("Enter username: ")
        password = self.caesar_cipher(getpass.getpass("Enter password: "), 3)
        user = self.execute_query("SELECT role FROM users WHERE username = %s AND password = %s", (username, password))
        if user:
            self.user_info = {"username": username, "role": user[0][0]}
            self.main_menu()
        else:
            print("Login failed. Check username/password.\n")
            exit()

    def main_menu(self):
        options = {
            "Logout / Switch User": self.logout,
            "Change Password": self.change_password,
            "Add Student": self.add_student,
            "View Students": self.view_students,
            "Add 30 Test Students": self.add_test_students,
            "View Users": self.view_users,
            "Add Course": self.add_course,
            "Enroll Student in Course": self.enroll_student,
            "Assign Grade": self.assign_grade,
            "View Courses": self.view_courses,
            "Add User": self.add_user
        }
        while True:
            for key in options:
                print(f"{key}")
            choice = input("Type 'exit' to exit. Choose an option: ")
            if choice == 'exit':
                self.logout()
                break
            if choice in options:
                options[choice]()

    def logout(self):
        print("\nLogged Out.\n")

    def change_password(self):
        new_password = self.caesar_cipher(getpass.getpass("New password: "), 3)
        self.execute_query("UPDATE users SET password = %s WHERE username = %s", (new_password, self.user_info['username']), True)

    def add_student(self):
        self.execute_query("INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Student name: "), input("Student age: "), input("Department: ")), True)

    def view_students(self):
        for row in self.execute_query("SELECT * FROM students"):
            print(row)

    def add_test_students(self):
        for _ in range(30):
            self.execute_query("INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (self.faker.name(), self.faker.random_int(min=18, max=22), self.faker.random_element(elements=('CS', 'IT', 'ECE', 'EEE'))), True)

    def view_users(self):
        for row in self.execute_query("SELECT user_id, username, role FROM users"):
            print(row)

    def add_course(self):
        self.execute_query("INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Course name: "), input("Course duration: ")), True)

    def enroll_student(self):
        self.execute_query("INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (input("Student ID: "), input("Course ID: "), datetime.now().date()), True)

    def assign_grade(self):
        self.execute_query("INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (input("Student ID: "), input("Course ID: "), input("Grade: ")), True)

    def view_courses(self):
        for row in self.execute_query("SELECT * FROM courses"):
            print(row)

    def add_user(self):
        self.execute_query("INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Username: "), self.caesar_cipher(input("Password: "), 3), input("Role: ")), True)

    @staticmethod
    def branding():
        StudentManagementSystem.print_fancy_header("""
Student Management System

A Cybersecurity, DBMS, & Python Class Project by dmj.one crafted with care to empower education.\nYour journey is important to us.
________________________________________________________________________________
Team: Anshuman Mohanty, Ashutosh Rana, Divya Mohan, Jatin Sharma, Vedansh Sharma
""")

StudentManagementSystem()
