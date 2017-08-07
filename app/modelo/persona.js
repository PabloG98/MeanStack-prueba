var mongoose = require('mongoose');

module.exports = mongoose.model('persona', {
	nombre: String,
	apellido: String,
	edad: String
});