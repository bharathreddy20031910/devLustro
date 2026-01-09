const express = require('express')
const User = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'

const harsha = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user)
    res.status(400).json({ error: err.message });
}
const avani = async (req,res)=>{
const user =await User.find()
res.status(201).json(user)
}
const shivani = async (req,res)=>{
const user =await User.findById(req.params.id)
res.status(201).json(user)
}
const  harshi =async (req,res)=>{
const user =await User.findByIdAndDelete(req.params.id)
res.status(201).json(user)
}
const charan =async (req,res)=>{
const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.status(201).json(user)
}

const signup = async (req,res)=>{
const {name,email,password}=req.body;

const existUser = await User.findOne({email})
if(existUser){
    res.json("User existed Please Login")
}

const user = new User({name,email,password})
await user.save();
}

const login = async(req,res)=>{
const {email,password}=req.body;

const findUser = await User.findOne({email,password})
if(!findUser){
    return res.status(401).json("Invalid user")
}
const token = jwt.sign({userId:findUser._id,email:findUser.email},JWT_SECRET,{expiresIn:'1h'})
res.json({token,UserId:findUser})
console.log(token);
}

const profile =  async (req, res) => {
const user = await User.findById(req.userId);
if (!user) {
return res.status(404).json({ message: "User not found" });
}
res.json(user);}
let t=[harsha,avani,shivani,harshi,charan,signup,login,profile]
module.exports = t