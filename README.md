# Teams CRUD
Crie sua conta, adicione as squads de sua empresa e adicione seus membros. 

Esta aplicação foi feita utilizando Node, Express e Mongoose, junto com MongoDB e algumas paçocas.

---
## Sumário
- [Objetivo](#objetivo)
- [Tecnologias utlizadas](#tecnologias-utilizadas)
- [Rodando o projeto](#rodando-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando o repositório](#clonando-o-repositório)
  - [Instalando as dependências](#instalando-as-dependências)
  - [Rodando o projeto](#rodando-o-projeto)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Próximos passos](#próximos-passos)


## Objetivo

Criar um CRUD que possa ser utilizado para a criação de equipes de trabalho, sendo possível adicionar pessoas à elas por meio de um processo autenticado, que exige o registro ou login para autorização.

## Tecnologias utilizadas

* Node.js
* ExpressJS
* Mongoose
* MongoDB
* ESLinter
* Bcrypt
* JWT
* Joi

## Rodando o projeto

### Pré-requisitos:

Para rodar este projeto é necessário que você tenha instalado:

- **Node**, na versão `14.6` ou maior;
- **NPM**, na versão `7.21`ou maior;
- **MongoDB**

### Clonando o repositório

Clone o repositório inserindo os seguintes comandos em seu terminal:

```
git clone git@github.com:pinhob/crud-teams.git
cd crud-teams
```

### Instalando as dependências

Dentro do diretório do projeto, rode em seu terminal o comando para instalar as dependências:

```
npm install
```

Com isso será descarregado o `node_modules` e todas as dependências.

### Rodando o projeto
Renomeie o arquivo `.env.example` para `.env`.

Certifique-se que o MongoDB está rodando em sua máquina com o comando `sudo systemctl status mongod`.

Se for necessário inicializar o MongoDB, utilize o comando `sudo systemctl start mongod`.

Execute o projeto com o comando:

```
npm start
```
Ou `npm run dev` para executar com o `Nodemon`. 

**DICA**: Carregue o arquivo [`CRUD_Insomnia.json`](https://github.com/pinhob/crud-teams/blob/main/CRUD_Insomnia.json) no Insomnia para fazer requisições à aplicação mais rapidamente.

## Estrutura do projeto
Os arquivos de lógica da aplicação estão dentro da pasta `src`, que tem a seguinte estrutura:
```
--| src
----| api
----| controllers
----| database
------| models
----| middlewares
----| routes
----| services
----| utils
```

## Rotas
Para acessar a **documentação de rotas** da aplicação, acesse o arquivo [ROTAS.md](https://github.com/pinhob/crud-teams/blob/main/ROTAS.md).


## Próximos passos
- **Criar testes unitários e de integração**
- **Criar documentação utilizando o Swagger**
- Criar *endpoints* de buscas de times e pessoas por email
- Criar *feature* de adicionar e remover pessoas dos times
- Criar rota para projetos, que se integre com os times e pessoas
