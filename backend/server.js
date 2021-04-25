require('dotenv').config();

const express = require('express');
const path = require('path'); // manejar rutas de direcciones
const passport = require('passport'); //autenticacion
const flash = require('connect-flash');
const morgan = require('morgan'); //metodos HTTP y mostrarlos en consola
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser'); // procesar informacion
const session = require('express-session');
const multer = require('multer');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override');

const socket = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socket.listen(server);

require('./confic/database'); //requerir base de datos
require('./confic/passport')(passport); //requerir configuracion
require('./confic/comunicacion_serial')(io);

//setting
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'public')); //ubicacion de carpetas
app.set('view engine', 'ejs'); //motor de plantillas

//middlewares
app.use(morgan('dev')); //mensajes por consola por desarrollo
app.use(cookieparser()); //convertir cookie e interpretarlas
app.use(bodyparser.urlencoded({extend: true})); //interpretacion de formularios de cada url
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, //no se guarde constantemente
    saveUninitialized: false
})); //manejar sesiones de express
app.use(passport.initialize());
app.use(passport.session()); // unir a sesiones para no pedirlo constantemente
app.use(flash()); // mensajes entre HTML
// multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images/upload'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));  //una sola imagen // desde el frontend tendra ese nombre
app.use(express.urlencoded({extend: false})); //interpreta los datos del frontend en formato JSON
app.use(express.json()); //puede recibir peticiones Json del frontend
app.use(cors());
app.use(methodOverride('_method'))

//routes
require('./app/routes')(app, passport);

//static file
app.use(express.static(path.join(__dirname, 'public')));

//start the server
server.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});