const metodoPost = { };

const nodemailer = require('nodemailer');
const newHistorial = require('../app/models/historiales');
const newagenda = require('../app/models/agendas');

metodoPost.updateHistory = async (req, res) => {
    await newHistorial.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/profile');
}
metodoPost.deleteHistory = async (req, res) => {
    await newHistorial.findByIdAndDelete(req.params.id);
    res.redirect('/profile');
}
///////////////////////////////////////////////////

metodoPost.newAgenda = async (req, res) => {
    const newA = new newagenda(req.body);
    newA.user = req.user.id;
    await newA.save();
    res.redirect('/agenda');
}
metodoPost.deleteAgenda = async (req, res) => {
    await newagenda.findByIdAndDelete(req.params.id);
    res.redirect('/agenda');
}

////////////////////////
metodoPost.enviarMail = (req, res) => {
    const {name, email, phone, message} = req.body;
    contentHTML = '<h1>User informations</h1>' +
        '<ul>' +
        '<li>UserName: ' + name + '</li>' +
        '<li>User Email: ' + email + '</li>' +
        '<li>phone ' + phone + '</li>' +
        '</ul>' +
        '<p>' + message + '</p>';
    nodemailer.createTransport({

    })
    res.redirect('/stecnico');
}

module.exports = metodoPost;