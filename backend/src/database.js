const mongoose = require("mongoose");
//credenciales
const user ='anders';
const password ='159632a';
const dbname ='veterinaria';
const URI =`mongodb://anders:${password}@ac-6uytjpo-shard-00-00.vre5bcs.mongodb.net:27017,ac-6uytjpo-shard-00-01.vre5bcs.mongodb.net:27017,ac-6uytjpo-shard-00-02.vre5bcs.mongodb.net:27017/?ssl=true&replicaSet=atlas-2jevaa-shard-0&authSource=admin&retryWrites=true&w=majority`
//db_conect
mongoose
  .connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(db => console.log("💻 Mondodb Connected",db.connection.name))
  .catch(err => console.error(err));

  //mod_exp
  module.exports = mongoose;
  