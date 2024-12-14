# from flask import Flask, render_template, request, jsonify
# from werkzeug.exceptions import RequestEntityTooLarge
# import base64
# import numpy as np
# import cv2
# import face_recognition
# from fer import FER
# import librosa
# import soundfile as sf
# import os
# import pickle
# import subprocess

# app = Flask(__name__)
# app.secret_key = 'your_secret_key'

# # Set the maximum allowed payload to 16 megabytes
# app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB

# # Path to store enrollment data
# ENROLLMENT_DATA_PATH = 'enrollment_data.pkl'

# def load_enrollment_data():
#     if os.path.exists(ENROLLMENT_DATA_PATH):
#         with open(ENROLLMENT_DATA_PATH, 'rb') as f:
#             return pickle.load(f)
#     return {}  # Return an empty dictionary if no data exists

# def save_enrollment_data(data):
#     with open(ENROLLMENT_DATA_PATH, 'wb') as f:
#         pickle.dump(data, f)

# @app.errorhandler(413)
# @app.errorhandler(RequestEntityTooLarge)
# def handle_request_entity_too_large(e):
#     return jsonify({'status': 'fail', 'message': 'Uploaded data is too large. Please try again with smaller data.'}), 413

# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/enroll', methods=['GET', 'POST'])
# def enroll():
#     if request.method == 'POST':
#         # Get username
#         username = request.form.get('username')
#         if not username:
#             return jsonify({'status': 'fail', 'message': 'Username is required.'})

#         # Get face data
#         face_data_url = request.form['face_data']
#         face_image = data_url_to_image(face_data_url)

#         # Get voice data
#         voice_data_url = request.form['voice_data']
#         voice_audio = data_url_to_audio(voice_data_url)

#         # Process face
#         face_encoding = get_face_encoding(face_image)
#         if face_encoding is None:
#             return jsonify({'status': 'fail', 'message': 'No face detected.'})

#         # Detect face emotion
#         face_emotion = detect_face_emotion(face_image)

#         # Process voice
#         voice_features = extract_voice_features(voice_audio)

#         # Load existing enrollment data
#         enrollment_data = load_enrollment_data()

#         # Save enrollment data for the user
#         enrollment_data[username] = {
#             'face_encoding': face_encoding,
#             'face_emotion': face_emotion,
#             'voice_features': voice_features
#         }
#         save_enrollment_data(enrollment_data)

#         return jsonify({'status': 'success', 'message': f'Enrollment successful for user {username}.'})
#     return render_template('enroll.html')

# @app.route('/verify', methods=['GET', 'POST'])
# def verify():
#     if request.method == 'POST':
#         enrollment_data = load_enrollment_data()
#         if not enrollment_data:
#             return jsonify({'status': 'fail', 'message': 'No enrollment data found.'})

#         # Get face data
#         face_data_url = request.form['face_data']
#         face_image = data_url_to_image(face_data_url)

#         # Get voice data
#         voice_data_url = request.form['voice_data']
#         voice_audio = data_url_to_audio(voice_data_url)

#         # Process face
#         face_encoding = get_face_encoding(face_image)
#         if face_encoding is None:
#             return jsonify({'status': 'fail', 'message': 'No face detected during verification.'})

#         # Detect face emotion
#         face_emotion = detect_face_emotion(face_image)

#         # Process voice
#         voice_features = extract_voice_features(voice_audio)
#         if voice_features is None:
#             return jsonify({'status': 'fail', 'message': 'Error processing voice during verification.'})

#         # Attempt to match against all enrolled users
#         matched_user = None
#         for username, data in enrollment_data.items():
#             # Compare face encoding
#             face_match = face_recognition.compare_faces(
#                 [data['face_encoding']], face_encoding)[0]
#             app.logger.info(f"Face match result for {username}: {face_match}")

#             # Compare face emotion
#             face_emotion_match = (face_emotion == data['face_emotion'])
#             app.logger.info(f"Face emotion match result for {username}: {face_emotion_match}")

#             # Compare voice features
#             voice_distance = np.linalg.norm(data['voice_features'] - voice_features)
#             voice_match_threshold = 50  # Adjust this value based on testing
#             voice_match = voice_distance < voice_match_threshold
#             app.logger.info(f"Voice match result for {username}: {voice_match}, distance: {voice_distance}")

#             # If all match, we have found the user
#             if face_match and face_emotion_match and voice_match:
#                 matched_user = username
#                 break  # Stop after finding a matching user

#         if matched_user:
#             return jsonify({'status': 'success', 'message': f'Access granted. Welcome, {matched_user}!'})
#         else:
#             return jsonify({'status': 'fail', 'message': 'Access denied. No matching user found.'})
#     return render_template('verify.html')

# def data_url_to_image(data_url):
#     header, encoded = data_url.split(',', 1)
#     data = base64.b64decode(encoded)
#     img_array = np.frombuffer(data, dtype=np.uint8)
#     img = cv2.imdecode(img_array, flags=cv2.IMREAD_COLOR)
#     return img

# def data_url_to_audio(data_url):
#     header, encoded = data_url.split(',', 1)
#     data = base64.b64decode(encoded)
#     return data

# def get_face_encoding(image):
#     rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
#     boxes = face_recognition.face_locations(rgb_image)
#     if not boxes:
#         return None
#     encoding = face_recognition.face_encodings(rgb_image, boxes)[0]
#     return encoding

# def detect_face_emotion(image):
#     detector = FER(mtcnn=True)
#     result = detector.detect_emotions(image)
#     if result:
#         emotions = result[0]["emotions"]
#         dominant_emotion = max(emotions, key=emotions.get)
#         return dominant_emotion
#     return None

# def extract_voice_features(audio_data):
#     with open('temp_audio.webm', 'wb') as f:
#         f.write(audio_data)
#     subprocess.run(['ffmpeg', '-y', '-i', 'temp_audio.webm', 'temp_audio.wav'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#     y, sr = librosa.load('temp_audio.wav', sr=None)
#     mfcc = np.mean(librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40).T, axis=0)
#     os.remove('temp_audio.webm')
#     os.remove('temp_audio.wav')
#     return mfcc

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=8080)




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


