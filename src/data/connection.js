const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let db;

async function connectDB(){
    try{
        await client.connect();
        db = await client.db('roadPirates');
        console.log('Polaczono z MongoDB');
    }
    catch(err){
        console.error('Bład polaczenie z MongoDB', err);
    }
}
function getDB(){
    if(!db) throw new Error('Baza danych nie jest podlaczona');
    return db;
}
module.exports = {connectDB, getDB};