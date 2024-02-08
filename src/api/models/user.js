
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const crypto = require("crypto");

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
            index: { unique: true }
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
        this.salt = uuidv4();
        this.encry_password = this.securePassword(password)
    })
    .get(function () {
        return this._password
    })


userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) == this.encry_password
    },
    securePassword: function (plainpassword) {
        if (!plainpassword) return ""; //throw error
        try {
            return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
        } catch (err) {
            return ""
        }
    }
}

const User = module.exports = mongoose.model("User", userSchema);

module.exports = User;
