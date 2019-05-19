from flask import Flask
from flask import render_template
import os

BASE_DIR = os.path.basename(os.path.dirname(__file__))

app = Flask(__name__)

# app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
# app.config['MEDIA'] = os.path.join(BASE_DIR, 'media')


@app.route('/', methods=['GET'])
def index():
    return render_template('hero/hero.html')


if __name__ == "__main__":
    app.run(debug=True)