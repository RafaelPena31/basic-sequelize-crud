// para rodar o projeto
// primeiro npm install e depois npm run start

const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

// configirando conexão sqlite
const conn = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite"
});

// validar conexão com o arquivo e se ela existir conectar
conn.authenticate()
    .then(async () => {
        // lendo arquivo script.sql e persistindo no banco
        const dir = path.resolve(__dirname, "script.sql");
        const sqlCommand = fs.readFileSync(dir).toString("ascii");

        conn.query(sqlCommand);
    });

// criar um modelo
const model = conn.define("UserModel", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    born_date: {
        type: DataTypes.TIME,
        allowNull: false
    },
    nickname: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    // TODO: definir os atributos 
}, {
    // configurando a tabela
    timestamps: false, // não estamos usando os campos createdAt, updatedAt
    tableName: "usuario", // configuranod o nome da tabela
    underscored: true  // estamos usando os campos no banco com underscore
});
