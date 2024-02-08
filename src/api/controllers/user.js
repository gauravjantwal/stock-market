const User = require('../models/user');


exports.signup = (req, res) => {
    const user = new User (req.body)
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                error:"Unable to add user"
            })
        }
        return res.json({
            message: "success",
            user
        })
    })
}






//async function handleUserSignup(req, res) {
    //const {name, email, password} =req.body;
    //await User.create({
      //  name,
        //email,
        //password,
    //});
    //return res.render("home");
//}

//module.exports = {
  //  handleUserSignup,
//}