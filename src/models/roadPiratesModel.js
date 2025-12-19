const {ObjectId} = require('mongodb')
const {getDB} = require('../data/connection');

async function getAllroadPirates(sortBy){
    const db = getDB();
    const sorts = {
        name: { name: 1 },
        surname: { surname: 1 },
        createdAt: { createdAt: -1 }
    };
    const sort = sorts[sortBy] || sorts.createdAt;
    const cursor = db.collection('roadPirates').find();
    if (sortBy === 'name' || sortBy === 'surname') {
        return await cursor.collation({ locale: 'pl', strength: 2 }).sort(sort).toArray();
    }
    return await cursor.sort(sort).toArray();
}
async function getRoadPirateById(id){
    const db = getDB();
    return await db.collection('roadPirates')
    .findOne({_id: new ObjectId(id)});
}
async function addRoadPirate(name, surname){
    const db = getDB();
    await db.collection('roadPirates')
    .insertOne({name, surname, createdAt: new Date()})
}
async function updateRoadPirate(id, name, surname, brand, content){
    const db = getDB();
    await db.collection('roadPirates')
    .updateOne({ _id: new ObjectId(id)}, { $set: {id, name, surname, brand, content} });
}
async function deleteRoadPirate(id){
    const db = getDB();
    await db.collection('roadPirates')
    .deleteOne({ _id: new ObjectId(id) });
}
module.exports ={getAllroadPirates, getRoadPirateById, addRoadPirate, updateRoadPirate, deleteRoadPirate};