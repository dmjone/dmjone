# Run when dmjone.projectsms() is called

def projectsms():
    """
    This function represents the main entry point of the Student Management System program.
    It contains various functions for managing students, courses, user authentication, and database operations.
    """

    import mysql.connector
    import getpass
    import random
    import os
    import platform
    import shutil
    from datetime import datetime
    from faker import Faker

    faker = Faker()

    project_info = """
    Student Management System

    A Cybersecurity, DBMS, & Python Class Project by dmj.one crafted with care to empower education.\nYour journey is important to us.
    ________________________________________________________________________________
    Team: Anshuman Mohanty, Ashutosh Rana, Divya Mohan, Jatin Sharma, Vedansh Sharma
    """

    def print_fancy_header(text):
        """
        Prints a fancy header with a border around the given text.

        Args:
            text (str): The text to be displayed in the header.
        """
        terminal_width = shutil.get_terminal_size().columns
        lines = text.strip().split('\n')

        top_left = '╔'
        top_right = '╗'
        bottom_left = '╚'
        bottom_right = '╝'
        horizontal = '═'
        vertical = '║'

        top_border = top_left + horizontal * (terminal_width - 2) + top_right
        bottom_border = bottom_left + horizontal * (terminal_width - 2) + bottom_right

        print(top_border)
        for line in lines:
            line = line.center(terminal_width - 2)
            print(f"{vertical}{line}{vertical}")
        print(bottom_border)

    def print_centered(text):
        """
        Prints the given text centered in the terminal.

        Args:
            text (str): The text to be displayed.
        """
        terminal_width = shutil.get_terminal_size().columns
        lines = text.strip().split('\n')
        print()
        for line in lines:
            print(line.center(terminal_width))
        print()

    def clear_terminal():
        """
        Clears the terminal screen.
        """
        if platform.system() == "Windows":
            os.system("cls")
        else:
            os.system("clear")
        branding()

    def caesar_cipher(text, shift):
        """
        Applies the Caesar cipher encryption to the given text.

        Args:
            text (str): The text to be encrypted.
            shift (int): The number of positions to shift each character.

        Returns:
            str: The encrypted text.
        """
        result = ""
        for char in text:
            base = 'A' if char.isupper() else 'a'
            result += chr((ord(char) - ord(base) + shift) % 26 + ord(base))
        return result

    def connect_db():
        """
        Establishes a connection to the database.

        Returns:
            mysql.connector.connection.MySQLConnection: The database connection object.
        """
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
            print_centered("-"*36)
            print("⚠️ ", "-"*5, "WARNING: POTENTIAL DATA LOSS", "-"*5, "⚠️")        
            drop_db = input(f"Database '{db_name}' already exists. Are you sure you want to DROP it? This action CANNOT be undone. (y/n): ")
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
        """
        Executes the given SQL query on the database.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
            query (str): The SQL query to be executed.
            data (tuple, optional): The data to be passed to the query. Defaults to None.
            commit (bool, optional): Whether to commit the changes to the database. Defaults to False.

        Returns:
            list: The result of the query if it returns any rows, None otherwise.
        """
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
        """
        Sets up the required tables in the database if they don't already exist.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
        """
        queries = [
            "CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, dept VARCHAR(255))",
            "CREATE TABLE IF NOT EXISTS courses (course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(255), course_duration VARCHAR(255))",
            "CREATE TABLE IF NOT EXISTS enrollments (enrollment_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, enrollment_date DATE, FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))",
            "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), role VARCHAR(255))",
            "CREATE TABLE IF NOT EXISTS grades (grade_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT, course_id INT, grade CHAR(2), FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(course_id) REFERENCES courses(course_id))"
        ]
        try:
            for query in queries:
                execute_query(connection, query, commit=True)
            default_admin_user(connection)
            print("First Time Setup Completed Successfully. You are free to use the program now as required.\n")
        except Exception as e:
            print("Setup failed with error:", e)

    def default_admin_user(connection):
        """
        Creates a default admin user in the database if no users exist.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
        """
        execute_query(connection, "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), role VARCHAR(255))", commit=True)
        user_exists = execute_query(connection, "SELECT EXISTS(SELECT 1 FROM users LIMIT 1)")
        if user_exists and user_exists[0][0] == 0:  # No users exist
            execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", ('admin', caesar_cipher('password', 3), 'admin'), commit=True)
            print("\nDefault admin user created with username 'admin' and password 'password'.\nImportant: Change this default password immediately after logging in.\n")
            setup_tables(connection)

    def view_full_student_details(connection):
        """
        Retrieves and displays the full details of all students from the database.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
        """
        results = execute_query(connection, "SELECT s.id, s.name, s.age, s.dept, c.course_name, e.enrollment_date, g.grade FROM students s LEFT JOIN enrollments e ON s.id = e.student_id LEFT JOIN courses c ON e.course_id = c.course_id LEFT JOIN grades g ON s.id = g.student_id AND c.course_id = g.course_id")
        for row in results:
            print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}, Department: {row[3]}, Course: {row[4]}, Enrollment Date: {row[5]}, Grade: {row[6]}")

    def view_users(connection):
        """
        Retrieves and displays all users from the database.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
        """
        for row in execute_query(connection, "SELECT user_id, username, password, role FROM users"):
            print(f"User ID: {row[0]}, Username: {row[1]}, Role: {row[3]}")

    def view_courses(connection):
        """
        Retrieves and displays all courses from the database.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
        """
        for row in execute_query(connection, "SELECT course_id, course_name, course_duration FROM courses"):
            print(f"Course ID: {row[0]}, Course Name: {row[1]}, Course Duration: {row[2]}")    

    def user_login(connection):
        """
        Authenticates the user by checking their username and password.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.

        Returns:
            dict: A dictionary containing the username and role of the authenticated user.
        """
        print_centered("User Login")
        username = input("Enter username: ")
        password = caesar_cipher(getpass.getpass("Enter password: "), 3)  # Encrypt password using Caesar cipher
        user = execute_query(connection, "SELECT role FROM users WHERE username = %s AND password = %s", (username, password), False)
        if user:        
            role = user[0][0]
            clear_terminal()
            print_centered(f"Login successful. \nWelcome, {username}!")
            return {"username": username, "role": role}
        else:
            print("\nLogin failed. Please check your username and password.\n")
            exit()


    def check_access(user_role, required_roles):
        """
        Checks if the user has the required role(s) to access a certain feature.

        Args:
            user_role (str): The role of the user.
            required_roles (list): A list of roles required to access the feature.

        Raises:
            SystemExit: If the user does not have the required role(s).
        """
        if user_role not in required_roles:
            print("Access denied. Insufficient permissions.")
            exit()

    def change_password(connection, user):    
        """
        Changes the password of the currently logged-in user.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
            user (dict): A dictionary containing the username and role of the user.
        """
        encrypted_password = caesar_cipher(getpass.getpass("Enter password: "), 3)
        execute_query(connection, "UPDATE users SET password = %s WHERE username = %s", (encrypted_password, user['username']), commit=True)
        print("Password changed successfully.")

    def main_menu(connection, user):
        """
        Displays the main menu and handles user input.

        Args:
            connection (mysql.connector.connection.MySQLConnection): The database connection object.
            user (dict): A dictionary containing the username and role of the user.
        """
        options = [
            ("Logout / Switch User", lambda connection=connection, user=user: (print("\nLogged Out.\n"), authenticate_user(connection))[1], ["admin", "staff", "student", "accounts", "any"]),
            ("Change Password", lambda connection=connection, user=user: change_password(connection, user), ["admin", "staff", "student", "accounts", "any"]),
            ("Add Student", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (input("Enter student's name: "), int(input("Enter student's age: ")), input("Enter student's department: ")), True), ["admin", "staff"]),
            ("Add 30 Test Students", lambda connection=connection, user=user: [execute_query(connection, "INSERT INTO students (name, age, dept) VALUES (%s, %s, %s)", (faker.name(), random.randint(18, 24), faker.random_element(elements=('CSE', 'CSE AI', 'CSE AI R', 'CSE CC', 'CSE CS', 'CSE DS'))), True) for _ in range(30)], ["admin"]),        
            ("Add Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO courses (course_name, course_duration) VALUES (%s, %s)", (input("Enter course name: "), input("Enter course duration: ")), True), ["admin"]),        
            ("Enroll Student in Course", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (%s, %s, %s)", (int(input("Enter student ID: ")), int(input("Enter course ID: ")), datetime.now().date()), True), ["admin", "staff"]),
            ("Add User", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)", (input("Enter username: ").lower(), caesar_cipher(input("Enter password: "), 3), input("Enter user role (admin/staff/student): ").lower()), True), ["admin"]),        
            ("Assign Grade", lambda connection=connection, user=user: execute_query(connection, "INSERT INTO grades (student_id, course_id, grade) VALUES (%s, %s, %s)", (int(input("Enter student ID for grading: ")), int(input("Enter course ID for grading: ")), input("Enter grade (A, B, C, D, F): ")), True), ["admin", "staff"]),        
            ("View Students", lambda connection=connection, user=user: view_full_student_details(connection), ["admin", "staff", "student"]),        
            ("View Users", lambda connection=connection, user=user: view_users(connection), ["admin"]),
            ("View Courses", lambda connection=connection, user=user: view_courses(connection), ["admin"]),
        ]
        while True:
            visible_options = {str(index): (option[0], option[1], option[2]) for index, option in enumerate(options) if user["role"] in option[2]}
            print()
            for key, value in visible_options.items():
                print(f"{key}. {value[0]}")
            choice = input("Type 'exit' to exit the program. Choose an option: ")
            print()
            if choice == 'exit':
                clear_terminal()
                print_centered("Thank you for using the Student Management System, a project for you by the team of dmj.one\nThis project was created as part of public welfare initiative of dmj.one\nLet us know if you have any queries or need any help.\n\nVisit https://dmj.one for more projects. May the world be educated! See you again!")
                exit()
            elif choice in visible_options:
                visible_options[choice][1]()
            else:
                print("Invalid option or insufficient permissions.\n")

    def start():
        try:
            conn = connect_db()
            authenticate_user(conn)
        except mysql.connector.Error as err:
            print(f"Database connection failed: {err}")
        finally:
            conn.close()
    # if __name__ == "__main__":
        # try:
            # conn = connect_db()
            # authenticate_user(conn)
        # except mysql.connector.Error as err:
            # print(f"Database connection failed: {err}")
        # finally:
            # conn.close()

    def authenticate_user(conn):
        clear_terminal()
        default_admin_user(conn)
        user_info = user_login(conn)
        main_menu(conn, user_info)

    def branding():
        print_fancy_header(project_info)
    
    start()