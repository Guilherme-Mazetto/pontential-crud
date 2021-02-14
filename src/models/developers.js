const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  sexo: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  hobby: {
    type: String,
    required: true,
    trim: true
  },
  datanascimento: {
    type: Date,
    required: true
  }
});

mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
  }
});

module.exports = mongoose.model('Developers', schema);