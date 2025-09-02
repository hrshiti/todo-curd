const mongoose = require('mongoose');
const { todoPostData, todoUpdateData, todoGetData, todoDeleteData } = require('../controllers/todo-controller');
const router = require('express').Router();

router.post('/post',todoPostData)
router.get("/getData",todoGetData)
router.put("/updateData/:id",todoUpdateData)
router.delete("/deleteData/:id",todoDeleteData)
module.exports = router