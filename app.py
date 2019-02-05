from flask import Flask, render_template, request

from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup


app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/read', methods = ['GET', 'POST'])
def read():
    if request.method == "POST":
        return request.form['comicPageLink']
        return render_template("read.html")
