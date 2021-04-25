const { Schema, model } = require('mongoose');

const datepersonal = new Schema({
    titulo: {type: String},
    fecha: {type: String},
    hora: {type: String},
    user: {type: String}
},{timestamps: true,
});

module.exports = model('agenda', datepersonal);