"""
References:
https://medium.com/@swaroopkml96/deploying-your-p5-js-sketch-using-flask-on-heroku-8702492047f5
https://github.com/swaroopkml96/steering-text/blob/master/templates/home.html

"""

from flask import Flask, render_template, url_for, send_from_directory
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def home():
    return render_template('home.html')
    # return render_template('config.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)