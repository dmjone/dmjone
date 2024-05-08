import mysql.connector

def create_connection():
    db_name = input("Enter database name: ")
    user_name = input("Enter username: ")
    password = input("Enter password: ")
    conn = mysql.connector.connect(
        host="localhost",
        user=user_name,
        passwd=password,
        database=db_name
    )
    return conn

def create_tables(conn):
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, dept VARCHAR(255))")
    conn.commit()

def add_student(conn, name, age, dept):
    cursor = conn.cursor()
    sql = "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)"
    val = (name, age, dept)
    cursor.execute(sql, val)
    conn.commit()

def view_students(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM students")
    for (id, name, age, dept) in cursor:
        print(f"ID: {id}, Name: {name}, Age: {age}, Department: {dept}")

def main():
    conn = create_connection()
    print("Student Management System - dmj.one\nMade as DBMS Class Project by Anshuman Mohanty, Ashutosh Rana, Divya Mohan, Jatin Sharma, Vedansh Sharma")
    while True:
        choice = input("1. Create Tables\n2. Add Student\n3. View Students\n4. Exit\nChoose an option: ")
        if choice == '1':
            create_tables(conn)
        elif choice == '2':
            name = input("Enter student's name: ")
            age = int(input("Enter student's age: "))
            dept = input("Enter student's department: ")
            add_student(conn, name, age, dept)
        elif choice == '3':
            view_students(conn)
        elif choice == '4':
            break

if __name__ == "__main__":
    main()
