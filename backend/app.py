import requests
from bs4 import BeautifulSoup
from flask import Flask,jsonify,render_template
from flask_cors import CORS
app = Flask(__name__)

headers = requests.utils.default_headers()

headers.update(
    {
        'User-Agent': 'My User Agent 1.0',
    }
)




url = 'https://search.danawa.com/dsearch.php?k1=%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C&module=goods&act=dispMain'

def get_copang():
    try:
        data = requests.get(url,headers={"User-Agent":
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"})
        soup = BeautifulSoup(data.content, 'html.parser')
        main = soup.find_all('div',class_='prod_main_info')
        searchList = []
        for m in main:
            info ={}
            name = m.find('p',class_='prod_name')
            spec = m.find('div',class_='spec_list')
            a = m.find('a',class_='thumb_link')
            info["name"] = name.text
            info["spec"] = spec.text
            if a:
                info["href"] = a['href']
                searchList.append(info)

        return searchList
    except EOFError as Err:
        print(Err)
CORS(app)

    
@app.route('/')
def hello_world():
    rep = get_copang()
    # rt = [r.text for r in rep]

    return jsonify({'data':rep})


if __name__ == '__main__':
    app.run()