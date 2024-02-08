const mongoose = require('mongoose');
const crypto = require("crypto");
//const uuid = require("uuid");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlenght: 32,
            trim: true
        },       
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        encry_password: {
            type: String,
            required: true,
        },
        //salt: String,
    },
    { timestamps: true }
);
userSchema.virtual("password")
 .set(function(password) {
    this._password = password
    //this.salt = uuid()
    this.encry_password = this.securePassword(password)
})
 .get(function () {
    return this._password
 })


userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) == this.encry_password
    },
    securePassword: function(plainpassword) {
        if(!plainpassword) return "";
        try{
             return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
        } catch(err){
         return ""
        }
    }

}
 
module.exports = mongoose.model("user", userSchema);
