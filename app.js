// const {
//     MongoClient
// } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb+srv://fahrul:bxMd8rp6Ey8XLL6h@cluster0.adpu9uy.mongodb.net/test';
// const client = new MongoClient(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Database Name
// const dbName = 'modul-arab-lang';

// client.connect((err, client) => {
//     if (err) {
//         return console.log('gagal')
//     }

//     const db = client.db(dbName);

//     db.collection('moduls').find().toArray((err, result) => {
//         console.log(result)
//     })
// })

const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

const url = 'mongodb+srv://fahrul:bxMd8rp6Ey8XLL6h@cluster0.adpu9uy.mongodb.net/modul-arab-lang'
mongoose.connect(url);

const moduls = mongoose.model('modul', {
    judul: String,
    materi: [{
        judul: String,
        id: Number,
        cabang: String,
        pembahasan: [String]
    }]
});

moduls.find().then((result) => {
    console.log(result)
})