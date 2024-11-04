const Resume = require("../models/Resume")

const uploadResume = async (req, res) => {
    try {
        const resume = new Resume({
            pdf: req.file.filename  
        })
        await resume.save()

        res.status(200).json({ success: true, message: "Resume successfully uploaded." })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error." })
    }
}


const getAllResume = async (req, res) => {
    try {
        const resumes = await Resume.find()
        res.status(200).json({ success: true, data: resumes })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error." })
    }
}

module.exports = { uploadResume, getAllResume }
