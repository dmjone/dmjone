# pip install mysql-connector-python faker

import mysql.connector
from faker import Faker
import random

def connect_to_database():
    user = input("Enter username: ")
    password = input("Enter password: ")
    database = input("Enter DB name: ")
    db = mysql.connector.connect(
        host="localhost",
        user=user,
        password=password,
        database=database
    )
    return db

def create_tables(cursor):
    cursor.execute("CREATE TABLE IF NOT EXISTS Users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))")
    cursor.execute("CREATE TABLE IF NOT EXISTS Products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price DECIMAL(10,2))")
    cursor.execute("CREATE TABLE IF NOT EXISTS Orders (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, product_id INT)")
    cursor.execute("CREATE TABLE IF NOT EXISTS Payments (order_id INT, amount DECIMAL(10,2), method VARCHAR(255))")
    cursor.execute("CREATE TABLE IF NOT EXISTS Shipment (order_id INT, address VARCHAR(255), shipped_date DATE)")
    print("Tables created.")

def insert_fake_data(cursor, db):
    faker = Faker()
    for _ in range(10):
        cursor.execute("INSERT INTO Users (name, email) VALUES (%s, %s)", (faker.name(), faker.email()))
        cursor.execute("INSERT INTO Products (name, price) VALUES (%s, %s)", (faker.word(), random.uniform(10.0, 100.0)))
    db.commit()
    print("Fake data inserted.")

def display_join_types(cursor):
    # Example JOIN operations - Adjust SQL as needed
    cursor.execute("""
    SELECT Users.name, Products.name, Orders.id, Payments.amount, Shipment.address
    FROM Orders
    INNER JOIN Users ON Orders.user_id = Users.id
    INNER JOIN Products ON Orders.product_id = Products.id
    INNER JOIN Payments ON Orders.id = Payments.order_id
    INNER JOIN Shipment ON Orders.id = Shipment.order_id
    """)
    print("INNER JOIN results:", cursor.fetchall())

    cursor.execute("""
    SELECT Users.name, Products.name, Orders.id, Payments.amount, Shipment.address
    FROM Orders
    INNER JOIN Users ON Orders.user_id = Users.id
    INNER JOIN Products ON Orders.product_id = Products.id
    INNER JOIN Payments ON Orders.id = Payments.order_id
    INNER JOIN Shipment ON Orders.id = Shipment.order_id
    """)
    records = cursor.fetchall()
    for record in records:
        print("INNER JOIN:", record)

    cursor.execute("""
    SELECT Users.name, Orders.id
    FROM Users
    LEFT JOIN Orders ON Users.id = Orders.user_id
    """)
    records = cursor.fetchall()
    for record in records:
        print("LEFT JOIN:", record)

    cursor.execute("""
    SELECT Products.name, Orders.id
    FROM Products
    RIGHT JOIN Orders ON Products.id = Orders.product_id
    """)
    records = cursor.fetchall()
    for record in records:
        print("RIGHT JOIN:", record)

    cursor.execute("""
    SELECT Users.name, Orders.id
    FROM Users
    LEFT JOIN Orders ON Users.id = Orders.user_id
    UNION
    SELECT Users.name, Orders.id
    FROM Orders
    RIGHT JOIN Users ON Orders.user_id = Users.id
    """)
    records = cursor.fetchall()
    for record in records:
        print("FULL JOIN (Simulated):", record)

    cursor.execute("""
    SELECT Users.name, Products.name
    FROM Users
    CROSS JOIN Products
    """)
    records = cursor.fetchall()
    for record in records:
        print("CROSS JOIN:", record)


def main():
    db = connect_to_database()
    cursor = db.cursor()
    
    while True:
        print("\nMenu:")
        print("1. Create Tables")
        print("2. Insert Fake Data")
        print("3. Display Join Types")
        print("4. Exit")
        choice = input("Enter your choice: ")
        
        if choice == "1":
            create_tables(cursor)
        elif choice == "2":
            insert_fake_data(cursor, db)
        elif choice == "3":
            display_join_types(cursor)
        elif choice == "4":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")
    
    cursor.close()
    db.close()

if __name__ == "__main__":
    main()
