# Desafio 1 - Flask e FastAPI

# Instrucoes para instalar e executar:
1 - Acessar terminal
2 - cd  desafio_1 
2.1 - Depois cd flask_app ou cd fasthttp_app 

3 - instalar a dependência que se encontra na requirements.txt da pasta com: pip install -r requirements.txt

4 - Rodar aplicação com: python app.py

# Verificar se esta funcionando:

Servidor ficará disponível em http://localhost:5000 no flask

E no fastapi(fasthttp_app) ficara disponivel no http://localhost:8000

Acessar ar portas e verificar o retorno definido "Hello World"

# Possibilidade de rodar ambos ao mesmo tempo?

Sim, basta seguir utilizando portas diferentes.

# Diferencas
| Item                 | Flask                          | FastAPI                        |
|----------------------|-------------------------------|---------------------------------|
| Importação           | from flask import Flask        | from fastapi import FastAPI    |
| Criação do app       | app = Flask(__name__)          | app = FastAPI()                |
| Definição de rota    | @app.route("/")                | @app.get("/")                  |
| Resposta             | return "Hello, World!"         | return "Hello, World!"         |
| Inicialização        | app.run(debug=True, port=5000) | uvicorn app:app --port 8000    |


