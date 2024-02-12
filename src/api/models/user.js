const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

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
            trim: true
        },
        salt: {
            type: String
        },
        encry_password: {
            type: String
        },
    },
    { timestamps: true }
);
userSchema.virtual("password")
    .set(function (password) {
        this._password = password
        this.salt = bcrypt.genSaltSync(10);
        this.encry_password = this.securePassword(password)
    })
    .get(function () {
        return this._password
    })


userSchema.methods = {
    authenticate: function (plainpassword) {
        const result = bcrypt.compareSync(plainpassword, this.encry_password);
        return result;
    },
    securePassword: function (plainpassword) {
        if (!plainpassword) return ""; //throw error
        try {
            return bcrypt.hashSync(plainpassword, this.salt)
        } catch (err) {
            return ""
        }
    }
}

const User = module.exports = mongoose.model("User", userSchema);

module.exports = User;
