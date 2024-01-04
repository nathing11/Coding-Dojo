const mongoose = require('mongoose');
const dbName = process.env.dbName;
const username = process.env.username;
const pw = process.env.pw;

const uri = `mongodb+srv://amenallahbrahim6:root@cluster0.uuzud6k.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"+dbName))
    .catch(err => console.log("📢📢📢Something went wrong when connecting to the database", err));