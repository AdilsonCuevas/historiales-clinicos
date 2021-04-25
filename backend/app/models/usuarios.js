const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    local: {
        nombres: {type: String},
        apellidos: {type: String},
        email: {type: String},
        password: {type: String},
        especialidad: {type: String},
        empresa: {type: String}
    },
    google: {
        email: String,
        password: String,
        id: String,
        token: String
    },
});
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);