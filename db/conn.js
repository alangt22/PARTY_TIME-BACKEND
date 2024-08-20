const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);


        const uri = "mongodb+srv://alan:123@cluster0.udxhv.mongodb.net/test?retryWrites=true&w=majority";

        await mongoose.connect(uri);

        console.log("Conectado ao banco de dados com sucesso");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
    }
}

module.exports = main;
