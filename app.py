from flask import Flask, render_template, request

from web_scraping import simple_get, image_scrape, get_title


app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/read', methods = ['GET', 'POST'])
def read():
    if request.method == "POST":
        html = simple_get(request.form['comicPageLink'])
        pictures = image_scrape(html)
        comic_title = get_title(html)

        return render_template("read.html", pictures=pictures, comic_title=comic_title)
