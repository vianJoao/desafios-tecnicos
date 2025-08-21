from flask import Flask, render_template
import pandas as pd
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/editorias')
def editorias():
    df = pd.read_csv('editorias.csv', sep=';')
    dados = df.to_dict(orient='records')
    return render_template('editorias.html', dados=dados)

@app.route('/catfact')
def catfact():
    response = requests.get('https://catfact.ninja/fact')
    data = response.json()
    fact = data.get('fact', 'Nenhum fato disponível no momento.')
    return render_template('catfact.html', fact=fact)

@app.route('/hora')
def hora():
    return render_template('hora.html')

@app.route('/camera')
def camera():
    return render_template('camera.html')

if __name__ == '__main__':
    app.run(debug=True)
