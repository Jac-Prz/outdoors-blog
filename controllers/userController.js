const userModel = require('../database/userModel');

// bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
const initUsername = process.env.ADMIN_USERNAME;
const initPassword = process.env.ADMIN_PASSWORD;

// login user

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const dbData = await userModel.find({username: username})
    const dbPassword = await dbData[0].password;
    console.log(dbPassword)
    
    const match = await bcrypt.compare(password, dbPassword);
    if(match){
        res.json({authenticated: true});
    } else if (!match) {
        res.send({authenticated: false})
    }

        
}

// register a user
// bcrypt.hash(initPassword, saltRounds, (err, hash) => {
//     try {
//         const document = { username: initUsername, password: hash }
//         userModel.create(document);
//     } catch {
//         if (err) { console.log(err) }
//     }
// })


module.exports = loginUser;