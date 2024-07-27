import socket # Import the socket library
# Create a socket
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# Connect to the server
mysock.connect(('data.pr4e.org', 80))

# Send a request to the server
cmd = 'GET http://data.pr4e.org/intro-short.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)
# Receive data from the server
while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(), end='')
# Close the connection
mysock.close()
