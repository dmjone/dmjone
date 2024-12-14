#!/bin/bash

# Exit script on any error
set -e

# Update and upgrade system packages
echo "Updating and upgrading system packages..."
sudo apt-get update
sudo apt update
sudo apt upgrade -y

# Install required system dependencies
echo "Installing system dependencies..."
# Update and upgrade the package list
sudo apt-get update
sudo apt update
sudo apt upgrade -y

# Install development tools and libraries
sudo apt-get install -y build-essential cmake

# Install Python development tools
sudo apt-get install -y python3-pip python3-dev

# Install linear algebra and mathematical libraries
sudo apt-get install -y libopenblas-dev liblapack-dev

# Install graphical libraries and tools
sudo apt-get install -y libgl1-mesa-glx libx11-dev libgtk-3-dev

# Install audio and video libraries
sudo apt-get install -y libsndfile1 libsndfile1-dev ffmpeg libavcodec-extra

# Install the Nginx web server
sudo apt-get install -y nginx

# Install Python dependencies using pip
echo "Installing Python dependencies..."
pip install --no-cache-dir \
    pillow==10.2.0 \
    decorator==4.4.2 \
    matplotlib \
    imutils

# Install OpenCV libraries
pip install --no-cache-dir \
    opencv-python==4.6.0.66 \
    opencv-contrib-python==4.6.0.66

# Install TensorFlow and Keras
pip install --no-cache-dir \
    tensorflow==2.10 \
    keras==2.10

# Install audio processing libraries
pip install --no-cache-dir \
    pyAudioAnalysis \
    hmmlearn==0.2.1 \
    librosa \
    soundfile

# Install Flask and related libraries
pip install --no-cache-dir \
    flask \
    werkzeug

# Install facial recognition and emotion detection libraries
pip install --no-cache-dir \
    face_recognition \
    fer


# Create and configure the target directory
TARGET_DIR="/var/www/biometric-auth"
echo "Configuring the target directory: $TARGET_DIR..."
sudo mkdir -p "$TARGET_DIR"
sudo mkdir -p /var/www/biometric-auth/templates
sudo chown -R dm_shoolini:dm_shoolini "$TARGET_DIR"
sudo chmod u+w "$TARGET_DIR"
sudo chmod -R 755 "$TARGET_DIR"

echo "Setup completed successfully!"

sudo tee "/etc/nginx/sites-available/biometric-auth" > /dev/null <<'NGINXEOF'
server {
    listen 443 ssl;
    server_name biometric.dmj.one;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    error_page 404 /404.html;
    location = /404.html {
        root /var/www/biometric-auth/templates;
    }
}

server {
    listen 80;
    server_name biometric.dmj.one;

    # Redirect to HTTPS only if the scheme is HTTP
    if ($scheme = http) {
        return 301 https://$host$request_uri;
    }

    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}
NGINXEOF

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/nginx-selfsigned.key \
  -out /etc/ssl/certs/nginx-selfsigned.crt \
  -subj "/C=US/ST=State/L=City/O=Localhost/OU=Dev/CN=localhost"

sudo curl -o /etc/nginx/sites-available/biometric-auth https://raw.githubusercontent.com/divyamohan1993/cybersecurity/refs/heads/main/BiometricSecurity/emotional-state-based-biometric-authentication/biometric_auth
sudo ln -s /etc/nginx/sites-available/biometric-auth /etc/nginx/sites-enabled/
sudo sed -i '/http {/a \    client_max_body_size 50M;' /etc/nginx/nginx.conf
sudo nginx -t && sudo systemctl reload nginx

sudo ln -s /etc/nginx/sites-available/biometric-auth /etc/nginx/sites-enabled/
sudo sed -i '/http {/a \    client_max_body_size 50M;' /etc/nginx/nginx.conf && sudo nginx -t && sudo systemctl reload nginx
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl restart nginx

sudo tee "/var/www/biometric-auth/app.py" > /dev/null <<'APPEOF'
from flask import Flask, render_template, request, jsonify
from werkzeug.exceptions import RequestEntityTooLarge
import base64
import numpy as np
import cv2
import face_recognition
from fer import FER
import librosa
import soundfile as sf
import os
import pickle
import subprocess
import imutils
from scipy.ndimage import gaussian_filter

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Configuration variables
MAX_CONTENT_LENGTH_MB = 16
app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH_MB * 1024 * 1024  # 16 MB

# Path to store enrollment data
ENROLLMENT_DATA_PATH = 'enrollment_data.pkl'

# Default threshold values
DEFAULT_FACE_RECOGNITION_TOLERANCE = 0.6  # Default tolerance for face recognition
DEFAULT_VOICE_MATCH_THRESHOLD = 50        # Threshold for voice feature matching

def load_enrollment_data():
    if os.path.exists(ENROLLMENT_DATA_PATH):
        with open(ENROLLMENT_DATA_PATH, 'rb') as f:
            return pickle.load(f)
    return {}  # Return an empty dictionary if no data exists

def save_enrollment_data(data):
    with open(ENROLLMENT_DATA_PATH, 'wb') as f:
        pickle.dump(data, f)

@app.errorhandler(413)
@app.errorhandler(RequestEntityTooLarge)
def handle_request_entity_too_large(e):
    return jsonify({'status': 'fail', 'message': 'Uploaded data is too large. Please try again with smaller data.'}), 413

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/enroll', methods=['GET', 'POST'])
def enroll():
    if request.method == 'POST':
        # Get username
        username = request.form.get('username')
        if not username:
            return jsonify({'status': 'fail', 'message': 'Username is required.'})

        # Get face data
        face_data_url = request.form['face_data']
        face_image = data_url_to_image(face_data_url)

        # Get voice data
        voice_data_url = request.form['voice_data']
        voice_audio = data_url_to_audio(voice_data_url)

        # Preprocess face image
        face_image = preprocess_image(face_image)

        # Process face
        face_encoding = get_face_encoding(face_image)
        if face_encoding is None:
            return jsonify({'status': 'fail', 'message': 'No face detected.'})

        # Detect face emotion
        face_emotion = detect_face_emotion(face_image)

        # Preprocess voice audio
        voice_audio = preprocess_audio(voice_audio)

        # Process voice
        voice_features = extract_voice_features(voice_audio)
        if voice_features is None:
            return jsonify({'status': 'fail', 'message': 'Error processing voice during enrollment.'})

        # Load existing enrollment data
        enrollment_data = load_enrollment_data()

        # Save enrollment data for the user
        enrollment_data[username] = {
            'face_encoding': face_encoding,
            'face_emotion': face_emotion,
            'voice_features': voice_features
        }
        save_enrollment_data(enrollment_data)

        return jsonify({'status': 'success', 'message': f'Enrollment successful for user {username}.'})
    return render_template('enroll.html')

@app.route('/verify', methods=['GET', 'POST'])
def verify():
    if request.method == 'POST':
        enrollment_data = load_enrollment_data()
        if not enrollment_data:
            return jsonify({'status': 'fail', 'message': 'No enrollment data found.'})

        # Get face data
        face_data_url = request.form['face_data']
        face_image = data_url_to_image(face_data_url)

        # Get voice data
        voice_data_url = request.form['voice_data']
        voice_audio = data_url_to_audio(voice_data_url)

        # Preprocess face image
        face_image = preprocess_image(face_image)

        # Process face
        face_encoding = get_face_encoding(face_image)
        if face_encoding is None:
            return jsonify({'status': 'fail', 'message': 'No face detected during verification.'})

        # Detect face emotion
        face_emotion = detect_face_emotion(face_image)

        # Preprocess voice audio
        voice_audio = preprocess_audio(voice_audio)

        # Process voice
        voice_features = extract_voice_features(voice_audio)
        if voice_features is None:
            return jsonify({'status': 'fail', 'message': 'Error processing voice during verification.'})

        # Adjust thresholds dynamically
        face_tolerance = adjust_face_tolerance(face_image)
        voice_threshold = adjust_voice_threshold(voice_audio)

        # Attempt to match against all enrolled users
        matched_user = None
        for username, data in enrollment_data.items():
            # Compare face encoding
            face_match = face_recognition.compare_faces(
                [data['face_encoding']], face_encoding, tolerance=face_tolerance)[0]
            app.logger.info(f"Face match result for {username}: {face_match}")

            # Compare face emotion
            face_emotion_match = (face_emotion == data['face_emotion'])
            app.logger.info(f"Face emotion match result for {username}: {face_emotion_match}")

            # Compare voice features
            voice_distance = np.linalg.norm(data['voice_features'] - voice_features)
            voice_match = voice_distance < voice_threshold
            app.logger.info(f"Voice match result for {username}: {voice_match}, distance: {voice_distance}")

            # If all match, we have found the user
            if face_match and face_emotion_match and voice_match:
                matched_user = username
                break  # Stop after finding a matching user

        if matched_user:
            return jsonify({'status': 'success', 'message': f'Access granted. Welcome, {matched_user}!'})
        else:
            return jsonify({'status': 'fail', 'message': 'Access denied. No matching user found.'})
    return render_template('verify.html')

def data_url_to_image(data_url):
    header, encoded = data_url.split(',', 1)
    data = base64.b64decode(encoded)
    img_array = np.frombuffer(data, dtype=np.uint8)
    img = cv2.imdecode(img_array, flags=cv2.IMREAD_COLOR)
    return img

def data_url_to_audio(data_url):
    header, encoded = data_url.split(',', 1)
    data = base64.b64decode(encoded)
    return data

def preprocess_image(image):
    # Resize image to standard size
    image = imutils.resize(image, width=600)
    
    # Apply CLAHE for better contrast
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)
    image = cv2.cvtColor(enhanced, cv2.COLOR_GRAY2BGR)
    
    # Apply Gaussian blur
    image = cv2.GaussianBlur(image, (3, 3), 0)
    return image


def get_face_encoding(image):
    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    boxes = face_recognition.face_locations(rgb_image)
    if not boxes:
        app.logger.warning("No face locations found.")
        return None
    encoding = face_recognition.face_encodings(rgb_image, boxes)
    if not encoding:
        app.logger.warning("No face encodings found.")
        return None
    app.logger.info(f"Face detected: {boxes}")
    return encoding[0]


def detect_face_emotion(image):
    detector = FER(mtcnn=True)
    result = detector.detect_emotions(image)
    if result:
        emotions = result[0]["emotions"]
        dominant_emotion = max(emotions, key=emotions.get)
        return dominant_emotion
    return None

def preprocess_audio(audio_data):
    # Save the audio data temporarily
    with open('temp_audio.webm', 'wb') as f:
        f.write(audio_data)

    # Convert audio to WAV format using ffmpeg
    subprocess.run(['ffmpeg', '-y', '-i', 'temp_audio.webm', '-ar', '16000', 'temp_audio.wav'],
                   stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Load audio data
    y, sr = librosa.load('temp_audio.wav', sr=16000)

    # Apply noise reduction (simple method)
    y = librosa.effects.preemphasis(y)

    # Normalize audio
    y = librosa.util.normalize(y)

    # Save preprocessed audio back to temp file
    sf.write('temp_audio_preprocessed.wav', y, sr)

    # Read the preprocessed audio data
    with open('temp_audio_preprocessed.wav', 'rb') as f:
        preprocessed_audio = f.read()

    # Clean up temporary files
    os.remove('temp_audio.webm')
    os.remove('temp_audio.wav')
    os.remove('temp_audio_preprocessed.wav')

    return preprocessed_audio

def extract_voice_features(audio_data):
    # Save the audio data temporarily
    with open('temp_audio.wav', 'wb') as f:
        f.write(audio_data)

    try:
        y, sr = librosa.load('temp_audio.wav', sr=16000)
        if len(y) == 0:
            return None

        # Extract MFCC features
        mfcc = np.mean(librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40).T, axis=0)
    except Exception as e:
        app.logger.error(f"Error extracting voice features: {e}")
        return None
    finally:
        # Clean up temporary file
        os.remove('temp_audio.wav')

    return mfcc

def adjust_face_tolerance(image):
    # Compute image sharpness using the variance of the Laplacian
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    variance = cv2.Laplacian(gray, cv2.CV_64F).var()

    # Adjust face recognition tolerance based on image sharpness
    # Higher variance indicates a sharper image
    if variance < 100:
        # Blurry image, increase tolerance
        tolerance = DEFAULT_FACE_RECOGNITION_TOLERANCE + 0.2
    elif variance > 1000:
        # Very sharp image, decrease tolerance
        tolerance = DEFAULT_FACE_RECOGNITION_TOLERANCE - 0.1
    else:
        tolerance = DEFAULT_FACE_RECOGNITION_TOLERANCE

    # Ensure tolerance stays within reasonable bounds
    tolerance = max(0.4, min(tolerance, 0.8))
    app.logger.info(f"Adjusted face recognition tolerance: {tolerance}")
    return tolerance

def adjust_voice_threshold(audio_data):
    # Save the audio data temporarily
    with open('temp_audio.wav', 'wb') as f:
        f.write(audio_data)

    try:
        y, sr = librosa.load('temp_audio.wav', sr=16000)
        # Compute signal-to-noise ratio
        rms = librosa.feature.rms(y=y)
        snr = 20 * np.log10(np.mean(rms) / np.std(rms))

        # Adjust voice match threshold based on SNR
        if snr < 10:
            # Low SNR, increase threshold
            threshold = DEFAULT_VOICE_MATCH_THRESHOLD + 20
        elif snr > 30:
            # High SNR, decrease threshold
            threshold = DEFAULT_VOICE_MATCH_THRESHOLD - 10
        else:
            threshold = DEFAULT_VOICE_MATCH_THRESHOLD

        # Ensure threshold stays within reasonable bounds
        threshold = max(30, min(threshold, 70))
        app.logger.info(f"Adjusted voice match threshold: {threshold}")
    except Exception as e:
        app.logger.error(f"Error adjusting voice threshold: {e}")
        threshold = DEFAULT_VOICE_MATCH_THRESHOLD
    finally:
        # Clean up temporary file
        os.remove('temp_audio.wav')

    return threshold

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
APPEOF

sudo tee "/var/www/biometric-auth/templates/index.html" > /dev/null <<'INDEXEOF'
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Biometric Security System</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Inter', sans-serif;
                background: linear-gradient(to bottom, #2c3e50, #4ca1af);
                color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }

            .container {
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 15px;
                padding: 30px;
                max-width: 450px;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            }

            h1 {
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: 1.8rem;
                margin-bottom: 20px;
                color: #ffffff;
            }

            p {
                font-size: 1rem;
                color: rgba(255, 255, 255, 0.8);
                margin-bottom: 30px;
            }

            .btn-custom {
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                background: linear-gradient(90deg, #1f8ef1, #3cba92);
                color: #ffffff;
                border: none;
                padding: 12px 20px;
                font-size: 1rem;
                border-radius: 50px;
                text-transform: uppercase;
                transition: transform 0.3s ease, background 0.3s ease;
            }

            .btn-custom:hover {
                transform: scale(1.05);
                background: linear-gradient(90deg, #3cba92, #1f8ef1);
            }

            @media (max-width: 576px) {
                h1 {
                    font-size: 1.5rem;
                }

                .btn-custom {
                    font-size: 0.9rem;
                    padding: 10px 15px;
                }

                p {
                    font-size: 0.9rem;
                }
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1>Biometric Security System</h1>
            <p>Protect your data with advanced emotional state-based biometric authentication.</p>
            <div class="d-flex justify-content-center gap-3">
                <a href="/enroll" class="btn btn-custom shadow-sm">Enroll</a>
                <a href="/verify" class="btn btn-custom shadow-sm">Verify</a>
            </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </body>

</html>
INDEXEOF

sudo tee "/var/www/biometric-auth/templates/enroll.html" > /dev/null <<'ENROLLHTML'
<!DOCTYPE html>
<html data-bs-theme="dark">

    <head>
        <title>Biometric Enrollment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Include Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
        <style>
            body {
                background: radial-gradient(circle, #141e30, #243b55);
                color: #fff;
                font-family: 'Arial', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }

            .enroll-container {
                text-align: center;
                max-width: 400px;
                padding: 20px;
                background: rgba(0, 0, 0, 0.7);
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            }

            #video {
                width: 150px;
                height: 150px;
                border: 2px solid #00d4ff;
                border-radius: 50%;
                object-fit: cover;
                margin: 20px auto;
                display: block;
                box-shadow: 0 0 15px #00d4ff;
            }

            .form-control {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid #00d4ff;
                color: #fff;
                font-size: 1rem;
                padding: 10px;
                border-radius: 5px;
            }

            .form-control:focus {
                background: rgba(255, 255, 255, 0.2);
                border-color: #00d4ff;
                box-shadow: 0 0 8px #00d4ff;
                color: #fff;
                outline: none;
            }

            .btn-primary {
                background: linear-gradient(to right, #00d4ff, #0084ff);
                border: none;
                color: #fff;
                font-size: 1.2rem;
                padding: 10px 20px;
                border-radius: 50px;
                transition: transform 0.3s ease, background 0.3s ease;
            }

            .btn-primary:hover {
                transform: scale(1.1);
                background: linear-gradient(to right, #0084ff, #00d4ff);
            }

            #message {
                margin-top: 20px;
                font-size: 1rem;
                color: #00d4ff;
            }
        </style>

        <style>
            /* Darker modal backdrop */
            .modal-backdrop {
                background-color: #000 !important;
                opacity: 0.9 !important;
                /* Dark and professional */
            }
        
            /* Modal content styling */
            .modal-content {
                background: linear-gradient(to bottom, #1b1b1b, #2a2a2a);
                border: 1px solid #444;
                box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
            }
        
            /* Countdown circle container */
            .countdown-circle {
                width: 80px;
                height: 80px;
            }
        
            /* Countdown circle SVG animation */
            #countdownCircle {
                stroke: #ccc;
                /* Neutral, professional color */
                stroke-dasharray: 220;
                stroke-dashoffset: 220;
                animation: countdown-animation 5s linear forwards;
            }
        
            /* Countdown number styling */
            #countdownTimer {
                color: #ccc;
                font-size: 1.5rem;
            }
        
            /* Modal heading */
            .modal-body h5 {
                font-size: 1.2rem;
                color: #e0e0e0;
                /* Professional light gray */
                margin-bottom: 10px;
            }
        
            /* Modal body text */
            .modal-body p {
                font-size: 1rem;
                color: #b0b0b0;
                /* Subtle text color for readability */
                margin-bottom: 20px;
            }
        
            /* Countdown animation */
            @keyframes countdown-animation {
                from {
                    stroke-dashoffset: 220;
                }
        
                to {
                    stroke-dashoffset: 0;
                }
            }
        </style>




    </head>

    <body>
        <div class="enroll-container">
            <h1 class="mb-4">Enroll Biometric</h1>
            <input type="text" class="form-control mb-3 w-100" id="name" placeholder="Enter Your Name">
            <video id="video" autoplay muted loading="lazy"></video>
            <button id="enroll" class="btn btn-primary mt-4 w-100" aria-label="Enroll for biometric recording">Enroll</button>
            <div id="message"></div>
        </div>

        <!-- Pre-Recording Guide Modal -->
        <div class="modal fade" id="preRecordingModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center border-0" style="background: linear-gradient(to bottom, #141e30, #243b55);">
                    <div class="modal-body">
                        <div class="display-5 text-info">Get Ready</div>
                        <p class="mt-3" style="color: #d4d4d4;">Please speak a sentence loud and clear on next screen. Ensure you remain in the camera frame.</p>
                        <div class="mt-4" style="position: relative; display: flex; justify-content: center; align-items: center;">
                            <div class="countdown-circle">
                                <svg width="80" height="80" viewBox="0 0 80 80">
                                    <circle cx="40" cy="40" r="35" stroke="#00d4ff" stroke-width="5" fill="none" opacity="0.2" />
                                    <circle cx="40" cy="40" r="35" stroke="#00d4ff" stroke-width="5" fill="none" stroke-dasharray="220" stroke-dashoffset="220" id="countdownCircle" style="transition: stroke-dashoffset 1s linear;" />
                                </svg>
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #00d4ff; font-size: 1.5rem;" id="countdownTimer">5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="modal fade" id="recordingModal" tabindex="-1" aria-labelledby="recordingModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center border-0" style="background: linear-gradient(to bottom, #141e30, #243b55);">
                    <div class="modal-header mx-auto border-0">
                        <h3 class="modal-title display-2 text-warning" id="recordingModalLabel">Speak Now</h3>
                    </div>
                    <div class="modal-body">                        
                        <p>Please speak clearly. Stay in the camera frame.</p>
                        <!-- Recording Indicator -->
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <span class="me-2 text-danger fw-bold">●</span>
                            <span>Recording</span>
                        </div>
                        <!-- Spinner -->
                        <div class="spinner-border text-primary mx-auto" role="status">
                            <span class="visually-hidden">Recording...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Processing Overlay Modal -->
        <div class="modal fade" id="processingModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center bg-black text-white border-0" style="background: linear-gradient(to bottom, #141e30, #243b55);">
                    <div class="modal-body">                        
                        <p class="my-3">Processing your enrollment. Please wait...</p>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Processing...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script>
            const video = document.getElementById('video');
            const canvas = document.createElement('canvas'); // Hidden canvas for face image
            const messageElement = document.getElementById('message');
            let faceData = '';
            let voiceData = '';
            let mediaRecorder;
            let audioChunks = [];
            const audioDuration = 5000; // Record for 5 seconds

            // Reference to the processing modal
            const processingModal = new bootstrap.Modal(document.getElementById('processingModal'));
            const countdownTimerElement = document.getElementById('countdownTimer');
            const preRecordingModal = new bootstrap.Modal(document.getElementById('preRecordingModal'));
            const countdownCircle = document.getElementById('countdownCircle');


            // Show the processing modal before fetch
            function showProcessingModal() {
                processingModal.show();
            }

            // Hide the processing modal after fetch
            function hideProcessingModal() {
                processingModal.hide();
            }

            // Access the user's webcam and microphone
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then(stream => {
                    video.srcObject = stream;

                    // Prepare for audio recording
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

                    mediaRecorder.onstop = () => {
                        const blob = new Blob(audioChunks, { type: 'audio/webm' });
                        const reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            voiceData = reader.result;
                            submitEnrollment();
                        };
                    };
                })
                .catch(error => {
                    messageElement.textContent = 'Could not access camera and microphone. Please allow access.';
                });

            document.getElementById('enroll').addEventListener('click', (event) => {
                event.target.disabled = true;

                const rawName = document.getElementById('name').value;
                const name = rawName.replace(/\s+/g, '').toLowerCase();

                if (!name) {
                    messageElement.textContent = 'Please enter your name.';
                    event.target.disabled = false;
                    return;
                }

                // Capture face image
                canvas.width = 320;
                canvas.height = 240;
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                faceData = canvas.toDataURL('image/png');

                // Show the pre-recording modal
                preRecordingModal.show();
                let countdown = 5;

                countdownTimerElement.textContent = countdown;
                countdownCircle.style.strokeDashoffset = '220';

                const countdownInterval = setInterval(() => {
                    countdown--;
                    countdownTimerElement.textContent = countdown;

                    if (countdown <= 0) {
                        clearInterval(countdownInterval);
                        preRecordingModal.hide();

                        // Start audio recording
                        audioChunks = [];
                        mediaRecorder.start();

                        // Show recording modal
                        const recordingModal = new bootstrap.Modal(document.getElementById('recordingModal'));
                        recordingModal.show();

                        setTimeout(() => {
                            mediaRecorder.stop();
                            recordingModal.hide();
                        }, audioDuration);
                    }
                }, 1000);
            });


            // Updated submitEnrollment to include processing modal
            function submitEnrollment() {
                const rawName = document.getElementById('name').value;
                const name = rawName.replace(/\s+/g, '').toLowerCase(); // Processed name
                if (!faceData || !voiceData) {
                    messageElement.textContent = 'Error capturing data. Please try again.';
                    document.getElementById('enroll').disabled = false;
                    return;
                }

                showProcessingModal(); // Show processing overlay

                fetch('/enroll', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `username=${encodeURIComponent(name)}&face_data=${encodeURIComponent(faceData)}&voice_data=${encodeURIComponent(voiceData)}`
                })
                    .then(response => {
                        if (!response.ok) {
                            return response.json().then(errData => {
                                throw new Error(errData.message || 'Server error');
                            });
                        }
                        return response.json();
                    })
                    .then(data => {
                        messageElement.textContent = data.message || 'Enrollment successful.';
                    })
                    .catch(error => {
                        messageElement.textContent = `Error: ${error.message}`;
                    })
                    .finally(() => {
                        // document.getElementById('enroll').disabled = false;
                        hideProcessingModal(); // Hide processing overlay
                        const enrollButton = document.getElementById('enroll');
                        enrollButton.disabled = false;
                        enrollButton.textContent = 'Go to Login';
                        enrollButton.onclick = () => {
                            window.location.href = '/verify';
                        };
                    });
            }

        </script>
    </body>

</html>
ENROLLHTML

sudo tee "/var/www/biometric-auth/templates/verify.html" > /dev/null <<'VERIFYHTML'
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Biometric Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Include Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
        <style>
            body {
                background: radial-gradient(circle, #141e30, #243b55);
                color: #fff;
                font-family: 'Arial', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }

            .login-container {
                text-align: center;
                max-width: 400px;
                padding: 20px;
                background: rgba(0, 0, 0, 0.7);
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            }

            #video {
                width: 150px;
                height: 150px;
                border: 2px solid #00d4ff;
                border-radius: 50%;
                object-fit: cover;
                margin: 20px auto;
                display: block;
                box-shadow: 0 0 15px #00d4ff;
            }

            .btn-primary {
                background: linear-gradient(to right, #00d4ff, #0084ff);
                border: none;
                color: #fff;
                font-size: 1.2rem;
                padding: 10px 20px;
                border-radius: 50px;
                transition: transform 0.3s ease, background 0.3s ease;
            }

            .btn-primary:hover {
                transform: scale(1.1);
                background: linear-gradient(to right, #0084ff, #00d4ff);
            }

            .modal-content {
                background: rgba(0, 0, 0, 0.85);
                color: #fff;
                border: 2px solid #00d4ff;
                border-radius: 10px;
            }

            @media (max-width: 576px) {
                .login-container {
                    padding: 15px;
                    max-width: 95%;
                }

                #video {
                    width: 120px;
                    height: 120px;
                }

                .btn-primary {
                    font-size: 1rem;
                    padding: 8px 16px;
                }
            }
        </style>
    </head>

    <body>
        <div class="login-container">
            <h1 class="mb-4">Biometric Login</h1>
            <video id="video" autoplay muted loading="lazy"></video>
            <button id="verify" class="btn btn-primary mt-4 w-100" aria-label="Scan face and login">Scan & Login</button>
        </div>

        <!-- Bootstrap Modal -->
        <div class="modal fade" id="recordingModal" tabindex="-1" aria-labelledby="recordingModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center">
                    <div class="modal-header border-0">
                        <h5 class="modal-title" id="recordingModalLabel">Recording in Progress</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Recording your voice for biometric authentication. Please speak clearly.</p>
                        <div class="spinner-border text-primary mx-auto" role="status">
                            <span class="visually-hidden">Recording...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Include Bootstrap JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script>
            let video = document.getElementById('video');
            let canvas = document.createElement('canvas'); // Hidden canvas for capturing the face image
            let faceData = '';
            let voiceData = '';
            let mediaRecorder;
            let audioChunks = [];
            const audioDuration = 5000; // Record for 5 seconds

            // Access the user's webcam and microphone
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then(stream => {
                    video.srcObject = stream;

                    // Prepare for audio recording
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

                    mediaRecorder.onstop = () => {
                        let blob = new Blob(audioChunks, { type: 'audio/webm' });
                        let reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            voiceData = reader.result; // Save voice data
                            submitVerification(); // Submit both face and voice data
                        };
                    };
                })
                .catch(error => {
                    console.error('Error accessing media devices:', error);
                    alert('Could not access camera and microphone. Please allow access.');
                });

            document.getElementById('verify').addEventListener('click', (event) => {
                // Disable the button
                event.target.disabled = true;

                // Capture face image
                canvas.width = 320;
                canvas.height = 240;
                let context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                faceData = canvas.toDataURL('image/png'); // Save face data

                // Start audio recording
                audioChunks = []; // Clear previous recordings
                mediaRecorder.start();

                // Show the recording modal
                const recordingModal = new bootstrap.Modal(document.getElementById('recordingModal'));
                recordingModal.show();

                setTimeout(() => {
                    mediaRecorder.stop();
                    recordingModal.hide();
                }, audioDuration); // Stop recording after 5 seconds
            });

            function submitVerification() {
                if (!faceData || !voiceData) {
                    alert('Error capturing data. Please try again.');
                    return;
                }

                // Submit data to the server
                fetch('/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `face_data=${encodeURIComponent(faceData)}&voice_data=${encodeURIComponent(voiceData)}`
                })
                    .then(response => {
                        if (!response.ok) {
                            return response.json().then(errData => {
                                throw new Error(errData.message || 'Server error');
                            });
                        }
                        return response.json();
                    })
                    .then(data => {
                        alert(data.message); // Show success message
                    })
                    .catch(error => {
                        alert(error.message);
                    })
                    .finally(() => {
                        // Optionally keep the button disabled after completion or re-enable it
                        document.getElementById('verify').disabled = false;
                    });
            }
        </script>

    </body>

</html>
VERIFYHTML

nohup python3 /var/www/biometric-auth/app.py &