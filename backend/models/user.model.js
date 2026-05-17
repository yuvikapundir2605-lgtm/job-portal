import mongoose, { trusted } from "mongoose";
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        typr:Number,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    role:{
        tyoe:String,
        enum:['Student','Recruiter'],
        required:true
    },
    profile:{
        bio:{type:String},
        skills:{type:String},
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.Objected,ref:'Company'},
        profilePhoto:{
            type:String,
            default:""
        }

    },

},{timestamps:true});
export const User=mongoose.model('User',userSchema);