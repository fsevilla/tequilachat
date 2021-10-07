const { Db } = require('mongodb');

const router = require('express').Router();
const Database = require('./../models/database');


router.get('/', (req, res) => {
    // res.send('users endpoint!');
    const database = new Database('users');

    database.findOne({email: 'john.doe@gmail.com'})
        .then(results => {
            if(results) {
                console.log('Resultados: ', results);
                res.send(results);

            } else {
                console.log('No se encontro el usuario');
            }
        })
        .catch(err => {});
});



module.exports = router;