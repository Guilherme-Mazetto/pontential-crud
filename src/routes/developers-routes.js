const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const developersController = require('../controllers/developers-controllers');

router.get('/', developersController.listDevelopers);
router.get('/:id', developersController.getDeveloper);

router.post('/',[
    check('nome').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('sexo').isLength({ min: 1, max: 1 }).withMessage("Escreva somente a inicial.")
], developersController.createDeveloper);

router.put('/:id', [
    check('nome').optional().isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('sexo').optional().isLength({ min: 1, max: 1 }).withMessage("Escreva somente a inicial.")
], developersController.updateDeveloper);

router.delete('/:id', developersController.deleteDeveloper);

module.exports = router;