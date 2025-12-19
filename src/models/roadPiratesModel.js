const {ObjectId} = require('mongodb')
const {getDB} = require('../data/connection');

async function getAllroadPirates(){
    const db = getDB();
    return await db.collection('roadPirates')
    .find().sort({createdAt: -1}).toArray();
}
async function getRoadPirateById(id){
    const db = getDB();
    return await db.collection('roadPirates')
    .findOne({_id: new ObjectId(id)});
}

async function addRoadPirate(title, content){
    const db = getDB();
    await db.collection('roadPirates')
    .insertOne({title, content, createdAt: new Date()})
}

async function updateNote(id, title, content){
    const db = getDB();
    await db.collection('roadPirates')
    .updateOne({ _id: new ObjectId(id)}, { $set: { title, content } });
}

async function deleteRoadPirate(id){
    const db = getDB();
    await db.collection('roadPirates')
    .deleteOne({ _id: new ObjectId(id) });
}

module.exports ={getAllroadPirates, getRoadPirateById, addRoadPirate, updateNote, deleteRoadPirate};