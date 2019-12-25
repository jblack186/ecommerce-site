const router = require('express').Router();
const Users = require('./users-model.js');
const authRouter = require('../auth/authenticate-middleware.js');


require('dotenv').config()
console.log(process.env)


router.get('/', (req, res) => {
    Users.findAll()
    .then(users => {
      res.status(200).json(users);
      console.log(res)
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
  })

  router.post('/', async (req, res) => {
    const user = req.body
 .then(users => {
  res.status(200).json(users);
  console.log(res)
})
.catch(err => {
    console.log(err);
    res.send(err)
})
})

router.get('/users', authRouter, (req, res) => {
  const username = req.body
  const user = Users.findBy(username)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    console.log(err)
  })
})


    // try {
    //   const newUser = await Users.addUser(user)
    //   res.status(201).json(user)
    // }
    // catch(error) {
    //   res.status(500).json(error)
    // }
  

  module.exports = router;