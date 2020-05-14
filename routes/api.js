let express = require('express')
let Sequelize = require('sequelize')
let db = require('../models')
let guest = db.guest

let router = express.Router()

router.get('/guests', function(req, res, next){
    guest.findAll( {order: ['name']} ).then( guests => {
        return res.json(guests)
    }).catch( err => next(err))
})

router.post('/guests', function(req, res, next){
    guest.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( e => e.message )
            // 400 = bad request from user
            return res.status(400).json(messages)
        }
        return next(err)
    })
})

router.patch('/guests/:id', function(req, res, next) {
    guest.update( 
        req.body, { 
            where: {
                 id: req.params.id} 
                })  .then( rowsModified => {
       if (!rowsModified[0]) {
           //4040 = not gound, guest with this id not found
           return res.status(404).send('Not Found')
       } else {
           return res.send('ok')
       }
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            //4000 code = bad request from user
            return res.status(400).json(messages)
        }
        return next(err)
    })
})

router.delete('/guests/:id', function(req, res, next){
    guest.destroy({where: {id: req.params.id}}).then( rowsModified => {
        return res.send('ok')
    }).catch( err => next(err))
})

module.exports = router