const mongoose = require('mongoose');
const Developers = mongoose.model('Developers');

exports.listDevelopers = async () => {
  const res = await Developers.find({}, 'nome sexo idade hobby datanascimento');
  return res;
};

exports.getDeveloper = async id => {
  const res = await Developers.findById(id,'nome sexo idade hobby datanascimento');
  return res;
};


exports.createDeveloper = async data => {
  const developer = new Developers(data);
  await developer.save();
};

exports.updateDeveloper = async (id, data) => {
  await Developers.findByIdAndUpdate(id, {
    $set: data
  });
};

exports.deleteDeveloper = async id => {
  await Developers.findByIdAndDelete(id);
};