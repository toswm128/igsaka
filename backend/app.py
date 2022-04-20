import requests
from bs4 import BeautifulSoup
from flask import Flask,jsonify,render_template
from flask_cors import CORS
app = Flask(__name__)




url = 'https://www.coupang.com/np/search?component=&q=콜라&channel=user'

def get_copang():
    try:
        data = requests.get(url)
        soup = BeautifulSoup(data.content, 'html.parser')
        li = soup.find_all('li',class_='search-product')
        return li
    except EOFError as Err:
        print(Err)
CORS(app)

    
@app.route('/')
def hello_world():
    rep = get_copang()
    rt = [r.text for r in rep]

    return jsonify({'data':rt})


if __name__ == '__main__':
    app.run()