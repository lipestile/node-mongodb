const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://felipebalbino53:yv775FDN2DIki0qS@cluster0.ri3p7g6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Banco OK");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
