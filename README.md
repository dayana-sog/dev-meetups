

## <p align="center">:rocket: Dev-MeetUps. </p>

<p><strong>Sobre a aplicação:</strong> A aplicação foi criada com a funcionalidade ajudar a divulgar e criar encontros (seja presencial ou online) entres os devs, principalmente os iniciantes para compartilharem experiências, dúvidas e aprendizados. 
</p>
<p> 
Além de tudo essa pequena aplicação foi criada para por em práticos o que venho aprendendo sobre <strong>REACT, NODEJS, MONGODB</strong> entre outros.
</p>

<p>Aplicação ainda em construção...</p>

---

### Tela da aplicação:

<p align="center">
	<img src="https://user-images.githubusercontent.com/57035171/93498403-a666d380-f909-11ea-895d-67cd1c37b800.png" />
</p>


## :computer: Ferramentas Utilizadas

Backeend:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [MongoDB](https://docs.mongodb.com/)
	* [Sequelize](https://sequelize.org/)
	* [Yup](https://classic.yarnpkg.com/en/package/yup)
	* [Bcrypt](https://classic.yarnpkg.com/en/package/bcryptjs)
	* [Mongoose](https://mongoosejs.com/docs/)
	* [Multer](https://www.npmjs.com/package/multer)
	* [Nodemon](https://nodemon.io/)

Frontend:

-   [ReactJS](https://pt-br.reactjs.org/)
-   [Axios](https://github.com/axios/axios)
-   [React icons](https://react-icons.netlify.com/#/)
-   [React toastify](https://github.com/fkhadra/react-toastify)
-   [React router dom](https://www.npmjs.com/package/react-router-dom)
-   [Styled Components](https://styled-components.com/docs)


## :books: Instalação 

##### 	Para instalar a aplicação é necessário ter o [Node](https://nodejs.org/en/) , [Yarn](https://legacy.yarnpkg.com/en/docs/install/#mac-stable) e o [Docker](https://www.docker.com/) instalados em sua máquina.

Clone o repositório:
```sh
$ git clone https://github.com/dayana-sog/dev-meetups
```

Aceda a pasta do projeto:
```sh
$ cd dev-meetups
```
Gere o banco de dados no docker:
```
docker run --name dev-meetup-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Instale as dependências:
```sh
yarn
```
Inicie o servidor:
```sh
$ yarn dev
```

Para realizações de testes é recomendado que utilize o [Insomnia](https://insomnia.rest/) 

----------

Feito com ♥ by Dayana Gonçalves  👋 
