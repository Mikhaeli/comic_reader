from flask import Flask, render_template, request
import urllib.parse

from web_scraping import simple_get, image_scrape, title_scrape


app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/read', methods = ['GET', 'POST'])
def read():
    if request.method == "GET":
        link = urllib.parse.unquote(request.args['comicPageLink'])
        html = simple_get(link)

        #If html is valid
        if html is not None:
            comic_title = title_scrape(html)
            pictures = image_scrape(html)
            return render_template("read.html", pictures=pictures, comic_title=comic_title)

        return render_template("error.html", error_message="Invalid html, please check link")
