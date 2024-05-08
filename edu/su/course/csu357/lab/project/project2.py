import mysql.connector

def d():
    db_name = input("Enter database name: ")
    m = input("Enter username: ")
    j = input("Enter password: ")
    o = mysql.connector.connect(host="localhost", user=m, passwd=j, database=db_name)
    return o

def n(o):
    e = o.cursor()
    e.execute("CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, dept VARCHAR(255))")
    e.execute("CREATE TABLE IF NOT EXISTS courses (course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(255), course_duration VARCHAR(255))")
    e.execute("CREATE TABLE IF NOT EXISTS enrollments (enrollment_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))")
    o.commit()

def a(o, name, age, dept):
    e = o.cursor()
    sql = "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)"
    val = (name, age, dept)
    e.execute(sql, val)
    o.commit()

def v(o):
    e = o.cursor()
    e.execute("SELECT * FROM students")
    for (id, name, age, dept) in e:
        print(f"ID: {id}, Name: {name}, Age: {age}, Department: {dept}")

def c(o, course_name, course_duration):
    e = o.cursor()
    sql = "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)"
    val = (course_name, course_duration)
    e.execute(sql, val)
    o.commit()

def e(o, student_id, course_id):
    e = o.cursor()
    sql = "INSERT INTO enrollments (student_id, course_id) VALUES (%s, %s)"
    val = (student_id, course_id)
    e.execute(sql, val)
    o.commit()

def main():
    o = d()
    print("\n\n\t\tStudent Management System - dmj.one\n\nMade as DBMS Class Project by Anshuman Mohanty, Ashutosh Rana, Divya Mohan, Jatin Sharma, Vedansh Sharma\n")
    while True:
        choice = input("1. Create Tables\n2. Add Student\n3. View Students\n4. Add Course\n5. Enroll Student in Course\n6. Exit\nChoose an option: ")
        if choice == '1':
            try:
                n(o)    
                print("Tables created successfully.")
            except:
                print("Tables already exist.")
            
        elif choice == '2':
            add_student(o)
        elif choice == '3':
            view_students(o)
        elif choice == '4':
            add_course(o)
        elif choice == '5':
            enroll_student(o)
        elif choice == '6':
            break

def add_student(o):
    name = input("Enter student's name: ")
    age = int(input("Enter student's age: "))
    dept = input("Enter student's department: ")
    a(o, name, age, dept)

def view_students(o):
    v(o)

def add_course(o):
    course_name = input("Enter course name: ")
    course_duration = input("Enter course duration: ")
    c(o, course_name, course_duration)

def enroll_student(o):
    student_id = int(input("Enter student ID: "))
    course_id = int(input("Enter course ID: "))
    e(o, student_id, course_id)


if __name__ == "__main__":
    main()
