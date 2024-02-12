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
    .set(async function (password) {
        this._password = password
        bcrypt.genSalt(10, (err, salt) => {
            this.salt = salt;
        });
        this.encry_password = await this.securePassword(password)
    })
    .get(function () {
        return this._password
    })


userSchema.methods = {
    authenticate: async function (plainpassword) {
        const result = await bcrypt.compare(plainpassword, this.encry_password);
        return result;
    },
    securePassword: async function (plainpassword) {
        if (!plainpassword) return ""; //throw error
        try {
            return await bcrypt.hash(plainpassword, this.salt)
        } catch (err) {
            return ""
        }
    }
}

const User = module.exports = mongoose.model("User", userSchema);

module.exports = User;
