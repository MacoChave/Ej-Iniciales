import json
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET'])
@cross_origin()
def ping():
    return jsonify({"message": "pong"})

@app.route('/signin', methods=['POST'])
@cross_origin()
def signin():
    return jsonify({"message": "Sesión iniciada"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)