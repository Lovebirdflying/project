const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const TaskSchema = new mongoose.Schema({
   name:{
    type:String,
    required:[true, 'Name is required'],
    trim:true,
    maxlength:[20, 'Name can not be more than 20 character']
   }, 
   completed:{
    type:Boolean,
    default:false
},
})


module.exports = mongoose.model('Task', TaskSchema)