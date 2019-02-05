from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/read', methods = ['GET', 'POST'])
def read():
    if request.method == "GET":
        return render_template("read.html")
