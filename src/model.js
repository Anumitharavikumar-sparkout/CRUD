const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema(
    {
        "name": {type:String, require:true},
        "age": {type:Number, require:true},
        "email": {type:String, require:true}
      }
)

const student = mongoose.model('students',studentSchema)
module.exports = student


