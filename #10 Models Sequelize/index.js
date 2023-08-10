const Sequelize = require('sequelize');
const sequelize = new Sequelize('testenodejs','root','mwdev', {
    host: "localhost",
    dialect: "mysql"
});

// Cria uma tabela no BD pelo nodeJs
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Inseri dados nas colunas
Postagem.create({
    titulo: "Esse foi o titulo",
    conteudo: "Esse é o conteudo"
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Vai sincronizar o model com o mysql
//Usuario.sync({force: true})