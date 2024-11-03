const Message = require("../models/Message")
const sendMessage = async(req,res) =>{
    try{
        const {name,email,phone,message} = req.body;
        
        if(!name || !email || !phone || !message){
            return res.status(400).json({success:false,message:"All fields are required."})
        }

        const newMessage = new Message({
            name,
            email,
            phone,
            message
        })
        await newMessage.save()

        res.status(201).json({success:true,message:"Message sent successfully."})

    }catch(error){
        res.status(500).json({success:false,message:"Server error."})
    }
} 

const getAllMessages = async(req,res) =>{
    try{
        const messages = await Message.find();

       if(!messages){
        return res.status(404).json({success:false,message:"Message not found."})
       }

       res.status(200).json({success:true,messages})
       

    }catch(error){
        res.status(500).json({success:false,message:"Server error."})
    }
} 



module.exports = {
    sendMessage,
    getAllMessages
}