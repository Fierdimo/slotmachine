const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        immutable:true
    }
})

module.exports = mongoose.model('UserSchema', UserSchema)