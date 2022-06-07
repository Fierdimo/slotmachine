var express = require('express');
var router = express.Router();

const userModel = require('../schemas/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('retrieve')
  userModel.find()
  .then((data)=>{
    console.log(data)
  })
  res.render('index', { title: 'No son los androides que buscabas' });
});

router.put('/', (req, res, next) => {
  console.log(req.body.nombre)
  userModel.create({
    name:req.body.name
  })
  .then(console.log('creado'))
  res.render('index', { title: 'No son los androides que buscabas' });
});

router.delete('/', function(req, res, next) {
  userModel.findOneAndDelete(name=req.body.name)
  .then(console.log('eliminado '+req.body.name))
  res.render('index', { title: 'No son los androides que buscabas' });
});

router.delete('/deleteall', function(req, res, next) {
  userModel.remove({})
  .then(console.log('eliminados '))
  res.render('index', { title: 'No son los androides que buscabas' });
});

module.exports = router;
