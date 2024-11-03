const Message = require("../models/Message");
const sendMail = require("../utils/sendEmail");

const sendMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newMessage = new Message({
      name,
      email,
      phone,
      message,
    });
    const savedMessage = await newMessage.save();

    if (savedMessage) {
      const subject = `BscTech - New Message`;
      const text = `
        You have received a new message from BscTech:
      
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `;

      
      const info = await sendMail({ userEmail: email, subject, text });

      if (info.accepted.length > 0) {
        return res.status(201).json({ success: true, message: "Message sent successfully." });
      } else {
        return res.status(500).json({ success: false, message: "Failed to send email." });
      }
    }

  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
};


const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();

    if (!messages) {
      return res.status(404).json({ success: false, message: "Message not found." })
    }

    res.status(200).json({ success: true, messages })


  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." })
  }
}



module.exports = {
  sendMessage,
  getAllMessages
}