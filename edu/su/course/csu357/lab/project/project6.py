import mysql.connector
from datetime import datetime

def caesar_cipher(text, shift):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + shift - 65) % 26 + 65)
        else:
            result += chr((ord(char) + shift - 97) % 26 + 97)
    return result

def connect_db():
    conn = mysql.connector.connect(
        host="localhost",
        user=input("Enter username: "),
        passwd=input("Enter password: "),
        database=input("Enter database name: ")
    )
    return conn

def execute_query(connection, query, data=None, commit=False):
    cursor = connection.cursor()
    cursor.execute(query, data)
    if commit:
        connection.commit()
    elif cursor.with_rows:
        return cursor.fetchall()

def setup_tables(connection):
    queries = [
        """
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(255), 
            age INT, 
            dept VARCHAR(255)
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS courses (
            course_id INT AUTO_INCREMENT PRIMARY KEY, 
            course_name VARCHAR(255), 
            course_duration VARCHAR(255)
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS enrollments (
            enrollment_id INT AUTO_INCREMENT PRIMARY KEY, 
            student_id INT, 
            course_id INT, 
            enrollment_date DATE, 
            FOREIGN KEY(student_id) REFERENCES students(id), 
            FOREIGN KEY(course_id) REFERENCES courses(course_id)
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY, 
            username VARCHAR(255), 
            password VARCHAR(255), 
            role VARCHAR(255)
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS grades (
            grade_id INT AUTO_INCREMENT PRIMARY KEY, 
            student_id INT, 
            course_id INT, 
            grade CHAR(2), 
            FOREIGN KEY(student_id) REFERENCES students(id), 
            FOREIGN KEY(course_id) REFERENCES courses(course_id)
        )
        """
    ]
    for query in queries:
        execute_query(connection, query, commit=True)

def view_full_student_details(connection):
    query = """
    SELECT s.id, s.name, s.age, s.dept, c.course_name, e.enrollment_date, g.grade
    FROM students s
    LEFT JOIN enrollments e ON s.id = e.student_id
    LEFT JOIN courses c ON e.course_id = c.course_id
    LEFT JOIN grades g ON s.id = g.student_id AND c.course_id = g.course_id
    """
    results = execute_query(connection, query)
    print()
    for row in results:
        print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}, Department: {row[3]}, Course: {row[4]}, Enrollment Date: {row[5]}, Grade: {row[6]}")
    print()

def view_users(connection):
    for user_id, username, _, role in execute_query(connection, "SELECT user_id, username, password, role FROM users"):
        print(f"User ID: {user_id}, Username: {username}, Role: {role}")

def user_login(connection):
    username = input("Enter username: ")
    password = caesar_cipher(input("Enter password: "), 3)  # Encrypt password using Caesar cipher
    user = execute_query(connection, "SELECT role FROM users WHERE username = %s AND password = %s", (username, password))
    if user:
        print(f"Login successful. Welcome, {username}!")
        return {"username": username, "role": user[0][0]}
    else:
        print("Login failed. Please check your username and password.")
        exit()

def check_access(user_role, required_roles):
    if user_role not in required_roles:
        print("Access denied. Insufficient permissions.")
        exit()

def main_menu(connection, user):
    options = {
        "1": ("Create Tables", lambda: setup_tables(connection), ["admin"]),
        "2": ("Add Student", lambda: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),  # Functionality placeholders
        "3": ("View Students", lambda: view_full_student_details(connection), ["admin", "staff", "student"]),
        "4": ("Add Course", lambda: execute_query(connection, "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Enter course name: "), input("Enter course duration: ")), True)),
        "5": ("Enroll Student in Course", lambda: execute_query(connection, "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (int(input("Enter student ID: ")), int(input("Enter course ID: ")), datetime.now().date()), True)),
        "6": ("Add User", lambda: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: "), caesar_cipher(input("Enter password: "), 3), input("Enter user role (admin / staff / student): ")), True)),
        "7": ("Assign Grade", lambda: execute_query(connection, "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (int(input("Enter student ID for grading: ")), int(input("Enter course ID for grading: ")), input("Enter grade (A, B, C, D, F): ")), True)),
        "8": ("View Users", lambda: view_users(connection)),
        "9": ("Exit", lambda: exit())
        # Additional functionalities with RBAC
    }
    while True:
        print("\nChoose an option:")
        for key, value in options.items():
            print(f"{key}. {value[0]}")
        choice = input()
        if choice in options:
            action, roles = options[choice][1], options[choice][2]
            check_access(user["role"], roles)
            action()
        else:
            print("Invalid option.")

if __name__ == "__main__":
    connection = connect_db()
    user = user_login(connection)
    main_menu(connection, user)
