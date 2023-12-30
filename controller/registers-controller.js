//main purpose of this is reduce the lengthy of the routes.js file
const { get } = require("mongoose");
const Register = require("../model/Register");

const getAllRegisters = async(req,res,next) => {
    let registers;
    try{
        registers = await Register.find();
    }catch(err){
        console.log(err);
    }
    if(!registers){
       return res.status(404).json({message:"no registered users found"}); 
    }
    return res.status(200).json({registers});
};

const getById = async(req,res,next) => {
    const id =req.params.id
    let register;
    try{
        register = await Register.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!register){
        return res.status(404).json({message:"no registered users found"}); 
     }
     return res.status(200).json({register});
};


const addRegisters = async(req,res,next) => {
    const{name,email,password} = req.body

    let register;
    try{
        register = new Register({
            name,
            email,
            password,
        });
        await register.save();
    }catch(err){
        console.log(err);
    }
    if(!register) {
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({register});
};

exports.getById = getById;
exports.getAllRegisters = getAllRegisters;
exports.addRegisters = addRegisters;

