const jwt = require('jsonwebtoken')
const User = require('../model/database/Users')
const {parse, stringify} = require('flatted')

//add this to all private routes
module.exports = async (req, res, next) => {
   

    
 
        // const user = User.findOne( { email: req.body.email  })
    
         
      if(!req.header('Authorization')) return next()

        const authHeader = req.header('Authorization')
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]

       

        
        // console.log(token)
        //this has to be the id of the login user to pull post  from dataabase
        // token = jwt.sign({ _id: req.body.email === req.body._id }, process.env.ACCESS_TOKEN_SECRET)
        //401 is a resource we cannot access

        console.log(token)
        if(!token) return res.status(401).send('Access Denied')
    
         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err){
                return next()
            }

            req.user = payload
            next()
        })
        //verified variable returns the id number in user
       
       
      
        
   
        // res.status(401).send({err, error: 'Please Authenticate'})
     
}