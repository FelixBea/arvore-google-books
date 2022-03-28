# Projeto Google Books API

Este projeto tem o objetivo de exemplificar, de forma simples, um client
que busca e exibe conteudo da API Google Books.

O usuário pode interagir com a aplicação buscando publicações por título
e filtrando os resultados por preço, disponibilidade para venda e
formato do volume (pdf ou epub).

## Como executar

Você precisa ter o _npm_ instalado globalmente. Caso não tenha, pode começar por aqui: https://docs.npmjs.com/getting-started/configuring-your-local-environment.

1- Clone o projeto:
`git clone https://github.com/FelixBea/arvore-google-books.git`

2- Acesse a pasta do projeto no terminal e instale as dependências com o npm:
`npm i`

3- Este projeto utiliza uma api key para autenticação com a api Google Books.
Para gerar uma api key, você pode começar por esta documentação: https://cloud.google.com/docs/authentication/api-keys.

Ao obter a api key, é necessário armazená-la em um arquivo não versionado pelo git.
Crie, na raiz do projeto, um arquivo com o seguinte nome: ".env".
Neste arquivo, você poderá adicionar uma variável de ambiente cujo valor
será a api key gerada.

A variável precisa seguir o modelo abaixo:
`REACT_APP_GOOGLE_API_KEY = inserirSuaApiKeyAqui`

4- Para iniciar a aplicação e acessar via browser, use o comando `npm start`.
