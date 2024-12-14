#!/bin/bash

# Exit script on any error
set -e

# Update and upgrade system packages
echo "Updating and upgrading system packages..."
sudo apt-get update -qq
sudo apt update -qq
sudo apt upgrade -y -qq

# Install required system dependencies
echo "Installing system dependencies..."

# Install development tools and libraries
sudo apt-get install -y -qq build-essential cmake

# Install Python development tools
sudo apt-get install -y -qq python3-pip python3-dev

# Install linear algebra and mathematical libraries
sudo apt-get install -y -qq libopenblas-dev liblapack-dev

# Install graphical libraries and tools
sudo apt-get install -y -qq libgl1-mesa-glx libx11-dev libgtk-3-dev

# Install audio and video libraries
sudo apt-get install -y -qq libsndfile1 libsndfile1-dev ffmpeg libavcodec-extra

# Install the Nginx web server
sudo apt-get install -y -qq nginx

# Install Python dependencies using pip
echo "Installing Python dependencies..."
pip install --quiet --no-cache-dir \
    pillow==10.2.0 \
    decorator==4.4.2 \
    matplotlib \
    imutils

# Install OpenCV libraries
pip install --quiet --no-cache-dir \
    opencv-python==4.6.0.66 \
    opencv-contrib-python==4.6.0.66

# Install TensorFlow and Keras
pip install --quiet --no-cache-dir \
    tensorflow==2.10 \
    keras==2.10

# Install audio processing libraries
pip install --quiet --no-cache-dir \
    pyAudioAnalysis \
    hmmlearn==0.2.1 \
    librosa \
    soundfile

# Install Flask and related libraries
pip install --quiet --no-cache-dir \
    flask \
    werkzeug

# Install facial recognition and emotion detection libraries
pip install --quiet --no-cache-dir \
    face_recognition \
    fer


# Create and configure the target directory
echo "Configuring the target directory..."
TARGET_DIR="/var/www/biometric-auth"
sudo mkdir -p "$TARGET_DIR/templates"
sudo chown -R "$USER":"$USER" "$TARGET_DIR"
sudo chmod -R 755 "$TARGET_DIR"

echo "Generating a self-signed SSL certificate..."
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/nginx-selfsigned.key \
  -out /etc/ssl/certs/nginx-selfsigned.crt \
  -subj "/C=US/ST=State/L=City/O=Localhost/OU=Dev/CN=localhost"

echo "Configuring Nginx..."
sudo curl -s -o /etc/nginx/sites-available/biometric-auth https://raw.githubusercontent.com/divyamohan1993/cybersecurity/refs/heads/main/BiometricSecurity/emotional-state-based-biometric-authentication/static/biometric_auth
sudo ln -sf /etc/nginx/sites-available/biometric-auth /etc/nginx/sites-enabled/
sudo sed -i '/http {/a \    client_max_body_size 50M;' /etc/nginx/nginx.conf
sudo nginx -t && sudo systemctl reload nginx

echo "Downloading application files..."
sudo curl -s -o "$TARGET_DIR/app.py" https://raw.githubusercontent.com/divyamohan1993/cybersecurity/refs/heads/main/BiometricSecurity/emotional-state-based-biometric-authentication/static/app.py
sudo curl -s -o "$TARGET_DIR/templates/index.html" https://raw.githubusercontent.com/divyamohan1993/cybersecurity/refs/heads/main/BiometricSecurity/emotional-state-based-biometric-authentication/static/templates/index.html
sudo curl -s -o "$TARGET_DIR/templates/enroll.html" https://raw.githubusercontent.com/divyamohan1993/cybersecurity/refs/heads/main/BiometricSecurity/emotional-state-based-biometric-authentication/static/templates/enroll.html
sudo curl -s -o "$TARGET_DIR/templates/verify.html" https://raw.githubusercontent.com/divyamohan1993/cybersecurity/refs/heads/main/BiometricSecurity/emotional-state-based-biometric-authentication/static/templates/verify.html

echo "Starting the application..."
nohup python3 "$TARGET_DIR/app.py" > "$TARGET_DIR/app.log" 2>&1 &
echo "Application is running. Logs can be found in $TARGET_DIR/app.log"