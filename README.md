# Airbnb - Gama Academy

Olá amigos, este repositório contém o código-fonte do desafio Gama Academy, onde vamos contruir um painel semelhante ao AirBnB.

Vamos consumir a API: [API - https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72](https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72)

### Estrutura de diretórios

    .
        ├── ...
        ├── css                     # Diretório de estilos
        │   ├── airbnb.css          # estilo principal
        │   ├── style.css           # estilo secundário (webcomponents)
        ├── js                      # Diretório de script funcional
        │   ├── main.js             # Script principal para consulta à API
        │   ├── app.js              # Script secundário para consulta à API (fetch)
        │   ├── location-card.js    # Script do webcomponent (location card)
        ├── index.html              # página principal

### Como usar a abordagem com webcomponents + fetch api

- copie o conteúdo do arquivo index.2.html para o arquivo index.html

obs.: a fetch api já utiliza de validação de CORS, portanto, é necessário utilizar um webserver para utilizá-lo.

#### O resultado esperado é:

<img src="https://github.com/jgabriellima/airbnb-gama-academy/blob/master/screenshot.png?raw=true" alt="AirBnB Gama Academy" />

