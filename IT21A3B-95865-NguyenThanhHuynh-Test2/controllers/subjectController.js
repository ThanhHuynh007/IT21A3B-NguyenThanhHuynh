const Subject = require("../model/model");

const subjectController = {
    //ADD SUBJECT
    addSubject: async(req,res)=> {
        try{
           const newSubject = new Subject(req.body);
           const savedSubject = await newSubject.save();
           res.status(200).json(savedSubject);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //GET ALL SUBJECT
    getAllSubject: async(req,res)=> {
        try{
            const subjects = await Subject.find();
            res.status(200).json(subjects);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //GET AN SUBJECT
    getAnSubject: async(req,res)=>{
        try{
            const subjects = await Subject.findById(req.params.id)
            res.status(200).json(subjects);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //UPDATE SUBJECT
    updateSubject: async(req,res)=>{
        try {
          const subjects = await Subject.findById(req.params.id);
          await subjects.updateOne({$set: req.body});  
          res.status(200).json("Update successfully!");
        } catch (error) {
            res.status(500).json(err);
        }
    },
    //DELETE SUBJECT
    deleteSubject: async(req,res)=>{
        try {
            await Subject.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        } catch (error) {
           res.status(500).json(err); 
        }
    }
};
module.exports = subjectController;