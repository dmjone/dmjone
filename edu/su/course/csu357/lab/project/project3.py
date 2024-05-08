import mysql.connector
from hashlib import sha256
from datetime import datetime

def d():
    db_name = input("Enter database name: ")
    m = input("Enter username: ")
    j = input("Enter password: ")
    o = mysql.connector.connect(host="localhost", user=m, passwd=j, database=db_name)
    return o

def n(o):
    e = o.cursor()
    e.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(255), 
            age INT, 
            dept VARCHAR(255)
        )
    """)
    e.execute("""
        CREATE TABLE IF NOT EXISTS courses (
            course_id INT AUTO_INCREMENT PRIMARY KEY, 
            course_name VARCHAR(255), 
            course_duration VARCHAR(255)
        )
    """)
    e.execute("""
        CREATE TABLE IF NOT EXISTS enrollments (
            enrollment_id INT AUTO_INCREMENT PRIMARY KEY, 
            student_id INT, 
            course_id INT, 
            enrollment_date DATE,
            FOREIGN KEY(student_id) REFERENCES students(id), 
            FOREIGN KEY(course_id) REFERENCES courses(course_id)
        )
    """)
    e.execute("""
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY, 
            username VARCHAR(255), 
            password VARCHAR(255), 
            role VARCHAR(255)
        )
    """)
    e.execute("""
        CREATE TABLE IF NOT EXISTS grades (
            grade_id INT AUTO_INCREMENT PRIMARY KEY, 
            student_id INT, 
            course_id INT, 
            grade CHAR(2),
            FOREIGN KEY(student_id) REFERENCES students(id), 
            FOREIGN KEY(course_id) REFERENCES courses(course_id)
        )
    """)
    o.commit()

def v(o):
    e = o.cursor()
    e.execute("SELECT * FROM students")
    for (id, name, age, dept) in e:
        print(f"ID: {id}, Name: {name}, Age: {age}, Department: {dept}")

def a(o, name, age, dept):
    e = o.cursor()
    sql = "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)"
    val = (name, age, dept)
    e.execute(sql, val)
    o.commit()

def c(o, course_name, course_duration):
    e = o.cursor()
    sql = "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)"
    val = (course_name, course_duration)
    e.execute(sql, val)
    o.commit()

def e(o, student_id, course_id):
    e = o.cursor()
    sql = "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)"
    val = (student_id, course_id, datetime.now().date())
    e.execute(sql, val)
    o.commit()

def u(o, username, password, role):
    e = o.cursor()
    hashed_password = sha256(password.encode('utf-8')).hexdigest()
    sql = "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)"
    val = (username, hashed_password, role)
    e.execute(sql, val)
    o.commit()

def g(o, student_id, course_id, grade):
    e = o.cursor()
    sql = "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)"
    val = (student_id, course_id, grade)
    e.execute(sql, val)
    o.commit()

def main():
    o = d()
    print("Advanced Student Management System - dmj.one")
    while True:
        choice = input("1. Create Tables\n2. Add Student\n3. View Students\n4. Add Course\n5. Enroll Student in Course\n6. Add User\n7. Assign Grade\n8. Exit\nChoose an option: ")
        if choice == '1':
            n(o)
        elif choice == '2':
            name = input("Enter student's name: ")
            age = int(input("Enter student's age: "))
            dept = input("Enter student's department: ")
            a(o, name, age, dept)
        elif choice == '3':
            v(o)
        elif choice == '4':
            course_name = input("Enter course name: ")
            course_duration = input("Enter course duration: ")
            c(o, course_name, course_duration)
        elif choice == '5':
            student_id = int(input("Enter student ID: "))
            course_id = int(input("Enter course ID: "))
            e(o, student_id, course_id)
        elif choice == '6':
            username = input("Enter username: ")
            password = input("Enter password: ")
            role = input("Enter user role: ")
            u(o, username, password, role)
        elif choice == '7':
            student_id = int(input("Enter student ID for grading: "))
            course_id = int(input("Enter course ID for grading: "))
            grade = input("Enter grade (A, B, C, D, F): ")
            g(o, student_id, course_id, grade)
        elif choice == '8':
            break

if __name__ == "__main__":
    main()
