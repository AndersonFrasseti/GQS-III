# GQS-III
Projeto Final - Gestão da Qualidade de Software

Descrição do Projeto

Aplicação web com arquitetura MVC para um sistema de cadastro (Clientes e Reservas), desenvolvida como projeto final para a disciplina de Gestão da Qualidade de Software.

O projeto inclui uma API RESTful completa e uma interface web para cadastro, além de uma suíte de testes automatizados para a API (com Jest) e para a interface (com Cypress).

Tecnologias Utilizadas

    Backend: Node.js, Express.js

    Banco de Dados: MongoDB com Mongoose

    View Engine: EJS

    Testes de API: Jest, Supertest

    Testes E2E: Cypress

Como Clonar o Repositório

Bash

git clone https://github.com/andersonfrasseti/gqs-iii.git
cd gqs-iii

Como Instalar as Dependências

Execute o comando abaixo para instalar todas as dependências do projeto:
Bash

npm install

Como Executar o Projeto Localmente

    Crie um arquivo .env na raiz do projeto e adicione a sua string de conexão do MongoDB:

    # Para banco de dados local
    MONGO_URI=mongodb://localhost:27017/gqs_final

    # Ou para MongoDB Atlas
    # MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

    Inicie o servidor em modo de desenvolvimento:
    Bash

    npm run dev

    A aplicação estará rodando em http://localhost:3000. Acesse essa URL para ver o formulário de cadastro.

Como Executar os Testes

Testes da API (Jest)

Para rodar os testes de unidade e integração da API, execute o comando:
Bash

npm test

Testes de Interface (Cypress)

Para rodar os testes de ponta-a-ponta (E2E):

    Certifique-se de que a aplicação está rodando (npm run dev) em um terminal.

    Em um novo terminal, abra a interface do Cypress com o comando:
    Bash

    npx cypress open

    Na janela do Cypress, selecione E2E Testing, escolha um navegador e clique no arquivo de teste que deseja executar.

