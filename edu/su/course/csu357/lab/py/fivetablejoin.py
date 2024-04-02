import mysql.connector
from faker import Faker
import random

# Initialize Faker
faker = Faker()

# Database connection
db = mysql.connector.connect(
  host="localhost",
  user=input("Enter username: "),
  password=input("Enter password: "),
  database=input("Enter DB name: ")
)
cursor = db.cursor()

# Create tables
cursor.execute("CREATE TABLE IF NOT EXISTS Users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))")
cursor.execute("CREATE TABLE IF NOT EXISTS Products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price DECIMAL(10,2))")
cursor.execute("CREATE TABLE IF NOT EXISTS Orders (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, product_id INT)")
cursor.execute("CREATE TABLE IF NOT EXISTS Payments (order_id INT, amount DECIMAL(10,2), method VARCHAR(255))")
cursor.execute("CREATE TABLE IF NOT EXISTS Shipment (order_id INT, address VARCHAR(255), shipped_date DATE)")

# Insert fake data into Users and Products
for _ in range(10):
    cursor.execute("INSERT INTO Users (name, email) VALUES (%s, %s)", (faker.name(), faker.email()))
    cursor.execute("INSERT INTO Products (name, price) VALUES (%s, %s)", (faker.word(), random.uniform(10.0, 100.0)))

db.commit()  # Commit inserts

# Let's assume each user has an order for a random product
cursor.execute("SELECT id FROM Users")
user_ids = cursor.fetchall()
cursor.execute("SELECT id FROM Products")
product_ids = cursor.fetchall()

for user_id in user_ids:
    selected_product_id = random.choice(product_ids)[0]
    cursor.execute("INSERT INTO Orders (user_id, product_id) VALUES (%s, %s)", (user_id[0], selected_product_id))
    last_order_id = cursor.lastrowid
    cursor.execute("INSERT INTO Payments (order_id, amount, method) VALUES (%s, %s, %s)", (last_order_id, random.uniform(10.0, 100.0), faker.credit_card_provider()))
    cursor.execute("INSERT INTO Shipment (order_id, address, shipped_date) VALUES (%s, %s, %s)", (last_order_id, faker.address(), faker.date()))

db.commit()  # Commit the rest of inserts

# Perform a join operation (example)
cursor.execute("""
SELECT Users.name, Products.name, Orders.id, Payments.amount, Shipment.address
FROM Orders
JOIN Users ON Orders.user_id = Users.id
JOIN Products ON Orders.product_id = Products.id
JOIN Payments ON Orders.id = Payments.order_id
JOIN Shipment ON Orders.id = Shipment.order_id
""")

# Fetch and print all records
records = cursor.fetchall()
for record in records:
    print(record)

# Close connection
cursor.close()
db.close()
