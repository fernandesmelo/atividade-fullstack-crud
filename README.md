# Movie & Music Manager 
Este projeto é um sistema CRUD (Create, Read, Update, Delete) para gerenciamento de filmes e músicas. Ele é dividido em duas partes principais: frontend e backend.

## Descrição do Projeto

### Frontend
O frontend é uma interface web desenvolvida em HTML, CSS e JavaScript, que permite aos usuários interagir com o sistema. Ele possui duas páginas principais:

1. Gerenciamento de Filmes (movie.html):
* Permite visualizar uma lista de filmes cadastrados.
* Possui um botão para adicionar novos filmes.
* Inclui uma tabela para exibir os filmes com informações como título, gênero e diretor.
* Oferece opções para editar ou excluir filmes existentes.
* Um modal é usado para adicionar ou editar filmes.

2. Gerenciamento de Músicas (song.html):
* Similar à página de filmes, mas voltada para o gerenciamento de músicas.
* Exibe uma lista de músicas com informações como título, artista e álbum.
* Permite adicionar, editar e excluir músicas.

### Backend
O backend é uma API REST desenvolvida em Node.js com Express e MongoDB. Ele fornece os endpoints necessários para realizar as operações CRUD no banco de dados. As principais funcionalidades incluem:

* Filmes:
  * Criar, listar, atualizar e excluir filmes.
* Músicas:
  * Criar, listar, atualizar e excluir músicas.

## Funcionalidades
* **Adicionar:** Permite adicionar novos filmes ou músicas ao sistema.
* **Listar:** Exibe todos os filmes ou músicas cadastrados.
* **Editar:** Permite modificar as informações de um filme ou música existente.
* **Excluir:** Remove um filme ou música do sistema.

## Objetivo
O objetivo do projeto é fornecer uma aplicação simples e funcional para gerenciar filmes e músicas, com uma interface amigável e um backend robusto para manipulação de dados. Ele pode ser usado como base para projetos maiores ou como exemplo de aprendizado para desenvolvimento de sistemas CRUD.


## 🛠️ Construído com

<div style="display: inline-block"><br/>
  <img align="center" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> 
  <img align="center" alt="html5" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img align="center" alt="html5" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img align="center" alt="html5" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 
  <img align="center" alt="html5" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />  
  <img align="center" alt="html5" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
</div><br/>

## 👨🏽‍💻 Versão das Tecnologias

* HTML5
* CSS3
* JavaScript ECMAScript 6 (ES6)
* Node.js 22.12.0
* Express.js 4.21.2
* Mongoose 7.8.0

## ✒️ Autor

* **Laércio Fernandes** - [LinkedIn](https://www.linkedin.com/in/laercio-fernandes/)

## 🚀 Guia de Como Baixar e Rodar o Projeto

### 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org)

Além disso, é bom ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código.

---

### 🛠️ Como rodar o projeto

Siga os passos abaixo para clonar o repositório e iniciar a aplicação localmente:

#### Antes de tudo:
```bash
# Clone o repositório
git clone https://github.com/fernandesmelo/atividade-fullstack-crud.git
```
#### Back-End
```bash
# 1. Acesse a pasta do projeto
cd api-fatos-historicos/backend

# 2. Instale as dependências
npm install

# 3. Rode o projeto
node app.js
```

#### Front-End
```bash
# 1. Abra o projeto no VS Code
cd frontend.

# 2. Abra o arquivo HTML principal
É o movie.html ou song.html.

# 3. Clique com o botão direito no index.html
E selecione "Open with Live Server".

# 4. O navegador será aberto automaticamente
```

## ⚙️ Executando os Testes
Próximos passos...
