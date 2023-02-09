# Formulário de Elegibilidade

Repositório de apresentação de uma aplicação de formulário de elegibilidade desenvolvida para o teste técnico da Lemon Energia. 

Esse repositório contém duas pastas: 

`/server` : backend do projeto, uma API desenvolvida com Node.js, Express e MongoDB. 

    A API apresenta uma rota post/ que é capaz de: 
    
    - receber informações da conta de luz do cliente, 
    - salvar o cliente no banco de dados e 
    - responder se ele é elegível ou não. 
    
    Caso seja elegível:
    - retornará também o calculo da economia anual de CO2 que o cliente terá. 
    
    Caso não seja elegível: 
    - retornará o critério de inegibilidade do mesmo.

`/client` : frontend do projeto, um formulário desenvolvido em Javascript e React. 

    O frontend do projeto apresenta um formulário que se conecta com o banco de dados usando o axios e é capaz de:
    
    - receber as informações preenchidas pelo cliente e 
    - enviá-las ao banco de dados ao clicar no botão enviar
    - cadastrar um novo cliente no banco. 
    - ao clicar no botão enviar é impressa a resposta de elegibilidade do cliente. 
    
    Caso seja elegível:
    - imprimirá também o calculo da economia anual de CO2 que o cliente terá. 
    
    Caso não seja elegível:
    - imprimirá o critério de inegibilidade do mesmo.

# Aplicação funcionando

## Exemplo de cliente elegível. 

![Screencast from 08-02-2023 18_59_08](https://user-images.githubusercontent.com/94760136/217674612-080df062-75c1-43ea-b79d-62ea38c9a790.gif)


## Exemplo de cliente não elegível.
![Screencast from 08-02-2023 19_00_02 (1)](https://user-images.githubusercontent.com/94760136/217674169-0e5c3a58-bd64-41a1-a7b8-116611948d17.gif)


# Como usar o aplicativo

1. Para clonar o repositório, vá até o diretório onde deseja clonar, execute o git clone e depois entre no diretório criado:

       git@github.com:marcelamchdo/lemon-energia-test.git
       cd lemon-energia-test

2. Dentro do diretorio entre na pasta /server, instale as dependências e inicie a aplicação

        //instalando dependências
        npm install

        //em seguida inicie a aplicação
        npm run dev

        //para rodar os testes unitários
        npm run test

3. Dentro do diretorio entre na pasta /client, instale as dependências e inicie a aplicação

        //instalando dependências
        npm install

        //em seguida inicie a aplicação
        npm start

4. A aplicação estárá rodando e acessível em http://localhost:3000/. A porta pode modificar se tiver uma variável PORT no ambiente que estiver executando. Você pode usar o arquivo `.env` na pasta server, apenas retirando o .exemple do final do arquivo. 

        //conteúdo do arquivo .env

        MONGOPORT = 4000
        MONGO=mongodb+srv://mrclmchdo:sqll1K7LfzHlvhgF@cluster0.u2r2zhv.mongodb.net/?retryWrites=true&w=majority





















