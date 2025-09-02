const { Todo } = require("../models/todoModel")



const todoPostData = async(req,res)=>{
    try{

        const {title,discription,completed} =  (req.body)
      
        if(!title || !discription){
            return res.status(400).json({error:"Please fill all the fields"})
        }
       
        const todo = new Todo({title,discription,completed
        })
        await todo.save()
        res.status(201).json({message:"Todo created successfully",todo})
    }
    catch(error){
        console.error("Error creating todo:",error)
        res.status(500).json({error:"Server error"})
    }
}

const todoGetData = async(req,res)=>{
    try{
        const todos = await Todo.find()
        res.status(200).json({todos})
    }
    catch(error){
        console.error("Error getting todos:",error)
        res.status(500).json({error:"Server error"})
    }
}
const todoUpdateData = async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        if(!todo){
            return res.status(404).json({error:"Todo not found"})
        }
        todo.title = req.body.title
        todo.discription = req.body.discription
        todo.completed = req.body.completed
        await todo.save()
        res.status(200).json({message:"Todo updated successfully",todo})
    }
    catch(error){
        console.error("Error updating todo:",error)
        res.status(500).json({error:"Server error"})
    }
}





const todoDeleteData = async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        if(!todo){
            return res.status(404).json({error:"Todo not found"})
        }
        await todo.remove()
        res.status(200).json({message:"Todo deleted successfully"})
    }
    catch(error){
        console.error("Error deleting todo:",error)
        res.status(500).json({error:"Server error"})
    }
}
module.exports = {todoPostData,todoGetData,todoUpdateData,todoDeleteData}