import mysql.connector
import getpass
import random
import os
import platform
import shutil
from datetime import datetime
from faker import Faker

faker = Faker()

# print(faker.name(), random.randint(18, 24), faker.random_element(elements=('CSE', 'CSE AI', 'CSE AI R', 'CSE CC', 'CSE CS', 'CSE DS')))

# project_info = """
# Student Management System
# A Cybersecurity, DBMS, & Python Class Project by dmj.one
# Team: Anshuman Mohanty, Ashutosh Rana, Divya Mohan, Jatin Sharma, Vedansh Sharma
# Crafted with care to empower education. Your journey with us matters.
# """

project_info = """
Student Management System

A Cybersecurity, DBMS, & Python Class Project by dmj.one crafted with care to empower education.\nYour journey is important to us.
________________________________________________________________________________
Team: Anshuman Mohanty, Ashutosh Rana, Divya Mohan, Jatin Sharma, Vedansh Sharma
"""

def print_fancy_header(text):
    terminal_width = shutil.get_terminal_size().columns
    lines = text.strip().split('\n')
    
    # Define box-drawing characters for corners and sides
    top_left = '╔'
    top_right = '╗'
    bottom_left = '╚'
    bottom_right = '╝'
    horizontal = '═'
    vertical = '║'

    # Create the top and bottom borders
    top_border = top_left + horizontal * (terminal_width - 2) + top_right
    bottom_border = bottom_left + horizontal * (terminal_width - 2) + bottom_right

    print(top_border)
    for line in lines:
        # Center each line within the box
        line = line.center(terminal_width - 2)
        print(f"{vertical}{line}{vertical}")
    print(bottom_border)

# print_fancy_header(info_text)

def print_centered(text):
    terminal_width = shutil.get_terminal_size().columns
    lines = text.strip().split('\n')
    # separator = "=" * terminal_width
    # print(separator)
    print()
    for line in lines:
        print(line.center(terminal_width))
    print()
    # print(separator)

def clear_terminal():
    if platform.system() == "Windows":
        os.system("cls")
    else:
        os.system("clear")
    branding()
    
def caesar_cipher(text, shift):
    # result = ""
    # for char in text:
    #     if char.isupper():
    #         result += chr((ord(char) + shift - 65) % 26 + 65)
    #     else:
    #         result += chr((ord(char) + shift - 97) % 26 + 97)
    # return result
    result = ""
    for char in text:
        base = 'A' if char.isupper() else 'a'
        result += chr((ord(char) - ord(base) + shift) % 26 + ord(base))
    return result

# def connect_db():
#     return mysql.connector.connect(
#         host="localhost",
#         user=input("Enter db username: "),
#         passwd=input("Enter db password: "),
#         database=input("Enter database name: ")
#     )

# def connect_db():
#     db_user = input("Enter db username (default: root): ").lower() or 'root'
#     # db_password = input("Enter db password: ") or ''
#     db_password = getpass.getpass("Enter db password: ")
#     db_name = input("Enter database name (default: csu357_project): ").lower() or 'csu357_project'
#     db_host = input("Enter database host (default: localhost): ").lower() or 'localhost'

#     connection = mysql.connector.connect(
#         host=db_host,
#         user=db_user,
#         passwd=db_password
#     )
#     cursor = connection.cursor()
    
#     # Check if database exists with the db_name. If it doesn't exist, create it. If it exists, ask user if they want to drop it.
#     if cursor.execute(f"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '{db_name}'"):
#         drop_db = input(f"Database '{db_name}' already exists. Do you want to drop it? (y/n): ").lower()
#         if drop_db == 'y':
#             cursor.execute(f"DROP DATABASE {db_name}")
#             connection.commit()
#         else:
#             input(f"Press Enter to create database '{db_name}' or Ctrl+C to cancel.")
#             cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
#             connection.commit()
    
#     cursor.close()
#     connection.close()

#     connection = mysql.connector.connect(
#         host=db_host,
#         user=db_user,
#         passwd=db_password,
#         database=db_name
#     )

#     return connection

def connect_db():
    clear_terminal()    
    print_centered("Database Connection Setup")    
    db_user = input("Enter db username (default: root): ") or 'root'
    db_password = getpass.getpass("Enter db password: ")
    db_name = input("Enter database name (default: csu357_project): ") or 'csu357_project'
    db_host = input("Enter database host (default: localhost): ") or 'localhost'

    connection = mysql.connector.connect(host=db_host, user=db_user, passwd=db_password)
    cursor = connection.cursor(buffered=True)

    cursor.execute(f"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '{db_name}'")
    if cursor.fetchone():
        drop_db = input(f"*DANGER*: Database '{db_name}' already exists. Do you want to drop it? (y/n): ")
        if drop_db == 'y':
            cursor.execute(f"DROP DATABASE {db_name}")
            connection.commit()

    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
    connection.commit()
    
    cursor.close()
    connection.close()

    connection = mysql.connector.connect(host=db_host, user=db_user, passwd=db_password, database=db_name)
    return connection

def execute_query(connection, query, data=None, commit=False):
    # cursor = connection.cursor()
    # if data:
    #     cursor.execute(query, data)
    # else:
    #     cursor.execute(query)
    # if commit:
    #     connection.commit()
    # else:
    #     return cursor.fetchall() if cursor.with_rows else None
    try:
        with connection.cursor() as cursor:
            cursor.execute(query, data)
            if commit:
                connection.commit()
            else:
                return cursor.fetchall() if cursor.with_rows else None
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        if commit:
            connection.rollback()

def setup_tables(connection):
    queries = [
        "CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, dept VARCHAR(255))",
        "CREATE TABLE IF NOT EXISTS courses (course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(255), course_duration VARCHAR(255))",
        "CREATE TABLE IF NOT EXISTS enrollments (enrollment_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, enrollment_date DATE, FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))",
        "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), role VARCHAR(255))",
        "CREATE TABLE IF NOT EXISTS grades (grade_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, grade CHAR(2), FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))"
    ]
    # for query in queries:
    #     execute_query(connection, query, commit=True)
    # # print("Tables created successfully.")    
    # default_admin_user(connection)
    try:
        for query in queries:
            execute_query(connection, query, commit=True)
        default_admin_user(connection)
        print("\nFirst Time Setup Completed Successfully. You are free to use the program now as required.\n")
    except Exception as e:
        print("Setup failed with error:", e)

# def default_admin_user(connection):
#     execute_query(connection, "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), role VARCHAR(255))", commit=True)
#     user_exists = execute_query(connection, "SELECT EXISTS(SELECT 1 FROM users)")
#     if user_exists and user_exists[0][0] == 0:  # No users exist     
#         execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", ('admin', caesar_cipher('password', 3), 'admin'), commit=True)        
#         print("Default admin user created with username 'admin' and password 'password'.\n")
#         setup_tables(connection)
#         print("\nFirst Time Setup Completed Successfully. You are free to use the program now as required.\n")
def default_admin_user(connection):
    user_exists = execute_query(connection, "SELECT EXISTS(SELECT 1 FROM users LIMIT 1)")
    if user_exists and user_exists[0][0] == 0:  # No users exist
        execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", ('admin', caesar_cipher('password', 3), 'admin'), commit=True)
        print("Default admin user created with username 'admin' and password 'password'.\n")


def view_full_student_details(connection):
    results = execute_query(connection, "SELECT s.id, s.name, s.age, s.dept, c.course_name, e.enrollment_date, g.grade FROM students s LEFT JOIN enrollments e ON s.id = e.student_id LEFT JOIN courses c ON e.course_id = c.course_id LEFT JOIN grades g ON s.id = g.student_id AND c.course_id = g.course_id")
    for row in results:
        print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}, Department: {row[3]}, Course: {row[4]}, Enrollment Date: {row[5]}, Grade: {row[6]}")

def view_users(connection):
    for row in execute_query(connection, "SELECT user_id, username, password, role FROM users"):
        print(f"User ID: {row[0]}, Username: {row[1]}, Role: {row[3]}")

# def user_login(connection):
#     user = execute_query(connection, "SELECT role FROM users WHERE username = %s AND password = %s", (input("Enter username: "), caesar_cipher(input("Enter password: "), 3)), False)
#     if user:
#         print(f"\nLogin successful. Welcome, {user[0][0]}!\n")
#         return {"role": user[0][0]}
#     else:
#         print("Login failed. Please check your username and password.")
#         exit()
        
# def user_login(connection):
#     # user = execute_query(connection, "SELECT role FROM users WHERE username = %s AND password = %s", (input("Enter username: "), caesar_cipher(input("Enter password: "), 3)), False)
#     user = execute_query(connection, "SELECT role FROM users WHERE username = %s AND password = %s", (input("Enter username: "), caesar_cipher(getpass.getpass("Enter password: "), 3)), False)
#     if user:
#         print(f"\nLogin successful. Welcome, {user[0][0]}!\n")
#         role = user[0][0]
#         if role == 'admin':
#             setup_tables(connection)  # Automatically setup tables for admin
#         return {"role": role}
#     else:
#         print("\nLogin failed. Please check your username and password.\n")
#         exit()

def user_login(connection):
    print_centered("User Login")
    username = input("Enter username: ")
    password = caesar_cipher(getpass.getpass("Enter password: "), 3)  # Encrypt password using Caesar cipher
    user = execute_query(connection, "SELECT role FROM users WHERE username = %s AND password = %s", (username, password), False)
    if user:        
        role = user[0][0]
        # if role is admin and it is logging in for first time, setup tables                
        # if role == 'admin':
        clear_terminal()
        # print(f"\nLogin successful. Welcome, {username}!\n")
        print_centered(f"Login successful. \nWelcome, {username}!")
        return {"username": username, "role": role}
    else:
        print("\nLogin failed. Please check your username and password.\n")
        exit()


def check_access(user_role, required_roles):
    if user_role not in required_roles:
        print("Access denied. Insufficient permissions.")
        exit()
        
def change_password(connection, user):
    new_password = input("Enter new password: ")
    encrypted_password = caesar_cipher(new_password, 3)  # Adjust the shift according to your encryption logic
    execute_query(connection, "UPDATE users SET password = %s WHERE username = %s", (encrypted_password, user['username']), commit=True)
    print("Password changed successfully.")


""" def main_menu(connection, user):
    options = {
        "1": ("Create Tables", setup_tables, ["admin"]),
        "2": ("Add Student", lambda: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),
        "3": ("View Students", lambda: view_full_student_details(connection), ["admin", "staff", "student"]),
        "4": ("Add Course", lambda: None, ["admin"]),
        "5": ("Enroll Student in Course", lambda: None, ["admin", "staff"]),
        "6": ("Add User", lambda: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: "), caesar_cipher(input("Enter password: "), 3), input("Enter user role (admin/staff/student): ")), True), ["admin"]),
        "7": ("Assign Grade", lambda: None, ["admin", "staff"]),
        "8": ("View Users", lambda: view_users(connection), ["admin"]),
        "9": ("Exit", exit, [])
    }
    while True:
        print("\nChoose an option:")
        for key, value in options.items():
            print(f"{key}. {value[0]}")
        choice = input()
        if choice in options and user["role"] in options[choice][2]:
            options[choice][1](connection)
        else:
            print("Invalid option or insufficient permissions.") """
# def main_menu(connection, user):
#     options = {
#         "0": ("Logout", lambda connection=connection, user=user: (print("Thank you for using this Student Management System by the team of dmj.one"), exit())[1], ["admin", "staff", "student", "accounts", "any"]),        
#         "1": ("Add Student", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),        
#         "2": ("Add 30 Test Students", lambda connection=connection, user=user: [execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (faker.name(), random.randint(18, 24), faker.random_element(elements=('CSE', 'CSE AI', 'CSE AI R', 'CSE CC', 'CSE CS', 'CSE DS'))), True) for _ in range(30)], ["admin"]),        
#         "3": ("Add Test Students", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),
#         "4": ("View Students", lambda connection=connection, user=user: view_full_student_details(connection), ["admin", "staff", "student"]),
#         "5": ("Add Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Enter course name: "), input("Enter course duration: ")), True), ["admin"]),
#         "6": ("Enroll Student in Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (int(input("Enter student ID: ")), int(input("Enter course ID: ")), datetime.now().date()), True), ["admin", "staff"]),
#         "7": ("Add User", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: ").lower(), caesar_cipher(input("Enter password: "), 3), input("Enter user role (admin/staff/student): ").lower()), True), ["admin"]),
#         "8": ("Assign Grade", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (int(input("Enter student ID for grading: ")), int(input("Enter course ID for grading: ")), input("Enter grade (A, B, C, D, F): ")), True), ["admin", "staff"]),
#         "9": ("View Users", lambda connection=connection, user=user: view_users(connection), ["admin"]),        
#         "10": ("Change Password", lambda connection=connection, user=user: change_password(connection, user), ["admin", "staff", "student", "accounts", "any"])
#     }
#     while True:        
#         for key, value in options.items():
#             print(f"{key}. {value[0]}", end="\n")        
#         choice = input("Choose an option: ")
#         if choice in options and user["role"] in options[choice][2]:
#             # options[choice][1](connection)
#             if callable(options[choice][1]):
#                 options[choice][1](connection=connection, user=user)
#         else:
#             print("Invalid option or insufficient permissions.\n")

# def main_menu(connection, user):
#     options = {
#         "exit": ("Exit", lambda connection=connection, user=user: (print("Thank you for using this Student Management System by the team of dmj.one"), exit())[1], ["admin", "staff", "student", "accounts", "any"]),
#         "0": ("Logout / Switch User", lambda connection=connection, user=user: (print("Logged Out."), authenticate_user(connection))[1], ["admin", "staff", "student", "accounts", "any"]),
#         "1": ("Add Student", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),
#         "2": ("Add 30 Test Students", lambda connection=connection, user=user: [execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (faker.name(), random.randint(18, 24), faker.random_element(elements=('CSE', 'CSE AI', 'CSE AI R', 'CSE CC', 'CSE CS', 'CSE DS'))), True) for _ in range(30)], ["admin"]),
#         "3": ("Add Test Students", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),
#         "4": ("View Students", lambda connection=connection, user=user: view_full_student_details(connection), ["admin", "staff", "student"]),
#         "5": ("Add Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Enter course name: "), input("Enter course duration: ")), True), ["admin"]),
#         "6": ("Enroll Student in Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (int(input("Enter student ID: ")), int(input("Enter course ID: ")), datetime.now().date()), True), ["admin", "staff"]),
#         "7": ("Add User", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: ").lower(), caesar_cipher(input("Enter password: "), 3), input("Enter user role (admin/staff/student): ").lower()), True), ["admin"]),
#         "8": ("Assign Grade", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (int(input("Enter student ID for grading: ")), int(input("Enter course ID for grading: ")), input("Enter grade (A, B, C, D, F): ")), True), ["admin", "staff"]),
#         "9": ("View Users", lambda connection=connection, user=user: view_users(connection), ["admin"]),
#         "10": ("Change Password", lambda connection=connection, user=user: change_password(connection, user), ["admin", "staff", "student", "accounts", "any"])
#     }
#     while True:
#         visible_options = {k: v for k, v in options.items() if user["role"] in v[2]}
#         for key, value in visible_options.items():
#             print(f"{key}. {value[0]}")
#         choice = input("Type 'exit' to exit the program. Choose an option: ")
#         if choice in visible_options:
#             visible_options[choice][1]()
#         else:
#             print("Invalid option or insufficient permissions.\n")

def main_menu(connection, user):
    options = [
        # ("Exit", lambda connection=connection, user=user: (print("Thank you for using this Student Management System by the team of dmj.one"), exit())[1], ["admin", "staff", "student", "accounts", "any"]),
        ("Logout / Switch User", lambda connection=connection, user=user: (print("\nLogged Out.\n"), authenticate_user(connection))[1], ["admin", "staff", "student", "accounts", "any"]),
        ("Add Student", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),
        ("Add 30 Test Students", lambda connection=connection, user=user: [execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (faker.name(), random.randint(18, 24), faker.random_element(elements=('CSE', 'CSE AI', 'CSE AI R', 'CSE CC', 'CSE CS', 'CSE DS'))), True) for _ in range(30)], ["admin"]),
        ("Add Test Students", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),
        ("View Students", lambda connection=connection, user=user: view_full_student_details(connection), ["admin", "staff", "student"]),
        ("Add Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Enter course name: "), input("Enter course duration: ")), True), ["admin"]),
        ("Enroll Student in Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (int(input("Enter student ID: ")), int(input("Enter course ID: ")), datetime.now().date()), True), ["admin", "staff"]),
        ("Add User", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: ").lower(), caesar_cipher(input("Enter password: "), 3), input("Enter user role (admin/staff/student): ").lower()), True), ["admin"]),
        ("Assign Grade", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (int(input("Enter student ID for grading: ")), int(input("Enter course ID for grading: ")), input("Enter grade (A, B, C, D, F): ")), True), ["admin", "staff"]),
        ("View Users", lambda connection=connection, user=user: view_users(connection), ["admin"]),
        ("Change Password", lambda connection=connection, user=user: change_password(connection, user), ["admin", "staff", "student", "accounts", "any"])
    ]
    while True:
        visible_options = {str(index): (option[0], option[1], option[2]) for index, option in enumerate(options) if user["role"] in option[2]}
        for key, value in visible_options.items():
            print(f"{key}. {value[0]}")
        choice = input("Type 'exit' to exit the program. Choose an option: ")
        if choice == 'exit':
            clear_terminal()
            print_centered("Thank you for using this Student Management System by the team of dmj.one. This project was created as part of public welfare initiative of dmj.one\nLet us know if you have any queries or need any help.\n\nVisit https://dmj.one for more projects. May the world be educated! See you again!")
            exit()
        elif choice in visible_options:
            visible_options[choice][1]()
        else:
            print("Invalid option or insufficient permissions.\n")


# if __name__ == "__main__":
#     conn = connect_db()
#     user_info = user_login(conn)
#     main_menu(conn, user_info)
# if __name__ == "__main__":
def start_from_init():
    try:
        conn = connect_db()
        authenticate_user(conn)
    except mysql.connector.Error as err:
        print(f"Database connection failed: {err}")
    finally:
        conn.close()
        
def authenticate_user(conn):
    clear_terminal()
    default_admin_user(conn)
    user_info = user_login(conn)
    main_menu(conn, user_info)
    
def branding():
    print_fancy_header(project_info)
    # print("\n================================================================================")
    # print("\t\t\tStudent Management System")
    # # print("\tMade as DBMS CSU357 Class Project by Anshuman Mohanty, Ashutosh Rana,")
    # print("\tA Cybersecurity, DBMS, Python Class Project by dmj.one")
    # print("Team: Anshuman Mohanty, Ashutosh Rana, Divya Mohan, Jatin Sharma, Vedansh Sharma")
    # print("     Crafted with care to empower education. Your journey with us matters.")
    # print("================================================================================\n")
    
start_from_init()