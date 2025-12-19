const roadPiratesModel = require('../models/roadPiratesModel');

async function getAll(req, res){
    const roadPirates = await roadPiratesModel.getAllroadPirates();
    res.render('pages/show', {roadPirates})
}
function getAddForm(req, res){
    res.render('pages/add');
}
async function postAdd(req, res){
    const {title, content} = req.body;
    await roadPiratesModel.addRoadPirate(title, content);
        res.redirect('/');
}
async function getEditForm(req, res){
    const roadPirate = await roadPiratesModel.getRoadPirateById(req.params.id);
    res.render('pages/edit', {roadPirate})
}
async function postEdit(req, res){
    const {title, content} = req.body;
    await roadPiratesModel.updateNote(req.params.id, title, content);
    res.redirect('/');
}
async function deleteRoadPirate(req, res) {
    await roadPiratesModel.deleteRoadPirate(req.params.id);
    res.redirect('/');
}

function getAbout(req, res){
    res.render('pages/about');
}

async function getStats(req, res){
    const roadPirates = await roadPiratesModel.getAllroadPirates();
    const count = roadPirates.length;
    const latest = roadPirates[0] || null;
    res.render('pages/stats', { count, latest });
}

module.exports={getAll, getAddForm, postAdd, getEditForm, postEdit, deleteRoadPirate, getAbout, getStats};