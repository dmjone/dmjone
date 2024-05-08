import mysql.connector
from hashlib import sha256
from datetime import datetime

def connect_db():
    return mysql.connector.connect(
        host="localhost", 
        user=input("Enter username: "),         
        passwd=input("Enter password: "), 
        database=input("Enter database name: ")
        #user="testuser",
        #database= "csu357_project"
    )

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
    try:
        for query in queries:
            execute_query(connection, query, commit=True)
        print("Tables created successfully.")
    except:
        print("Tables already exist.")

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

def main_menu(connection):
    options = {
        "1": ("Create Tables", lambda: setup_tables(connection)),
        "2": ("Add Student", lambda: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True)),
        "3": ("View Students", lambda: view_full_student_details(connection)),
        "4": ("Add Course", lambda: execute_query(connection, "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Enter course name: "), input("Enter course duration: ")), True)),
        "5": ("Enroll Student in Course", lambda: execute_query(connection, "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (int(input("Enter student ID: ")), int(input("Enter course ID: ")), datetime.now().date()), True)),
        "6": ("Add User", lambda: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: "), sha256(input("Enter password: ").encode('utf-8')).hexdigest(), input("Enter user role: ")), True)),
        "7": ("Assign Grade", lambda: execute_query(connection, "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (int(input("Enter student ID for grading: ")), int(input("Enter course ID for grading: ")), input("Enter grade (A, B, C, D, F): ")), True)),
        "8": ("View Users", lambda: view_users(connection)),
        "9": ("Exit", lambda: exit())
    }
    while True:        
        choice = input("\n".join([f"{key}. {value[0]}" for key, value in options.items()]) + "\nChoose an option: ")
        if choice in options:
            options[choice][1]()
        else:
            print("Invalid option.")

if __name__ == "__main__":
    connection = connect_db()    
    print("\n================================================================================")
    print("\t\t\tStudent Management System - dmj.one")
    print("\tMade as DBMS CSU357 Class Project by Anshuman Mohanty, Ashutosh Rana,")
    print("\t\t     Divya Mohan, Jatin Sharma, Vedansh Sharma")
    print("================================================================================\n")
    main_menu(connection)