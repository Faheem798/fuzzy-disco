import mongoose, { Mongoose } from "mongoose";
const mongoSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique : true
    },
    password: {
        type:String,
        select: false
    },
    created: {
        type: Date,
        default:Date.now()
    }
  });
  export const User = mongoose.model('users', mongoSchema);