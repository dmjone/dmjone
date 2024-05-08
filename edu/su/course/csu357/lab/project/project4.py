import mysql.connector
from hashlib import sha256
from datetime import datetime

def connect_db():
    return mysql.connector.connect(
        host="localhost", 
        user=input("Enter username: "), 
        passwd=input("Enter password: "), 
        database=input("Enter database name: ")
    )

def execute_query(connection, query, data=None, commit=False):
    cursor = connection.cursor()
    cursor.execute(query, data)
    if commit:
        connection.commit()
    else:
        return cursor.fetchall()

def setup_tables(connection):
    queries = [
        "CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, dept VARCHAR(255))",
        "CREATE TABLE IF NOT EXISTS courses (course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(255), course_duration VARCHAR(255))",
        "CREATE TABLE IF NOT EXISTS enrollments (enrollment_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, enrollment_date DATE, FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))",
        "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), role VARCHAR(255))",
        "CREATE TABLE IF NOT EXISTS grades (grade_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, grade CHAR(2), FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))"
    ]
    for query in queries:
        execute_query(connection, query, commit=True)

def main_menu(connection):
    options = {
        "1": ("Create Tables", lambda: setup_tables(connection)),
        "2": ("Add Student", lambda: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True)),
        "3": ("View Students", lambda: [print(f"ID: {id}, Name: {name}, Age: {age}, Department: {dept}") for id, name, age, dept in execute_query(connection, "SELECT * FROM students")]),
        "4": ("Add Course", lambda: execute_query(connection, "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Enter course name: "), input("Enter course duration: ")), True)),
        "5": ("Enroll Student in Course", lambda: execute_query(connection, "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (int(input("Enter student ID: ")), int(input("Enter course ID: ")), datetime.now().date()), True)),
        "6": ("Add User", lambda: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: "), sha256(input("Enter password: ").encode('utf-8')).hexdigest(), input("Enter user role: ")), True)),
        "7": ("Assign Grade", lambda: execute_query(connection, "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (int(input("Enter student ID for grading: ")), int(input("Enter course ID for grading: ")), input("Enter grade (A, B, C, D, F): ")), True)),
        "8": ("Exit", lambda: exit())
    }
    while True:
        choice = input("\n".join([f"{key}. {value[0]}" for key, value in options.items()]) + "\nChoose an option: ")
        if choice in options:
            options[choice][1]()
        else:
            print("Invalid option.")

if __name__ == "__main__":
    connection = connect_db()
    main_menu(connection)
