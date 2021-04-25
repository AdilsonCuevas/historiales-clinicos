const { updateHistory, deleteHistory, newAgenda, deleteAgenda, enviarMail} = require('./routespost')
const newHistorial = require('../app/models/historiales');
const newagenda = require('../app/models/agendas');

module.exports = (app, passport) => {
    app.get('/', (req, res) =>{
        res.render('principal');
    });
    app.get('/signup', (req, res) => {
        res.render('signup', {message: req.flash('SingupMessage')});
    });
    app.get('/login', (req, res) => {
        res.render('login', {message: req.flash('loginMessage')});
    });
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // si se puede logear
        failureRedirect: '/login', //produce fallas
        failureFlash: true // los mensajes de http se puedan visualizar
    }));

    app.post('/signup', passport.authenticate('local-singup', {
        successRedirect: '/profile', //se pudo registrar
        failureRedirect: '/signup', // falla el registro
        failureFlash: true // los mensajes de http se puedan visualizar
    }));
    app.get('/profile', isLoggedIn, async (req, res) => {
         const historiales = await newHistorial.find({user: req.user.id});
        res.render('profile', { user: req.user, historiales});
    });
    app.get('/newHistory', isLoggedIn, (req, res)=>{
        res.render('history', { user: req.user});
    });

    app.post('/newHistory', isLoggedIn, async (req, res)=>{
        var newH = new newHistorial(req.body);
        const imagen = 'images/upload/' + req.file.filename;
        newH.user = req.user.id;
        newH.imagenesELP = imagen;
        await newH.save();
        res.redirect('/profile');
    });
    app.delete('/newHistory/delete/:id', isLoggedIn, deleteHistory);

    app.get('/newHistory/edit/:id', isLoggedIn, async (req, res)=>{
        const datos = await newHistorial.findById(req.params.id);
        res.render('edithistory', { user: req.user, datos});
    });
    app.put('/newHistory/edit/:id', isLoggedIn, updateHistory);

    app.get('/newHistory/senales/:id', isLoggedIn , async (req, res)=>{
        const datos = await newHistorial.findById(req.params.id);
        res.render('senales', { user: req.user, datos});
    });
    app.put('/newHistory/senal/:id', isLoggedIn , async (req, res)=>{
        await newHistorial.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/profile');
    });


    app.get('/agenda', isLoggedIn, async (req, res) => {
        const agendas = await newagenda.find({user: req.user.id})
        res.render('agenda', { user: req.user, agendas});
    });
    app.post('/agenda', isLoggedIn, newAgenda);
    app.delete('/agenda/edit/:id', isLoggedIn, deleteAgenda);

    app.get('/stecnico', isLoggedIn, (req, res) => {
        res.render('stecnico', { user: req.user});
    });
    app.post('/stecnico', isLoggedIn, enviarMail);


    app.get('/logout', (req, res) => {
        req.logOut();
        res.redirect('/')
    });
};
// si esta autenticado o no
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {return next();}
    res.redirect('/');
}
