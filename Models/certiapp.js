const { Schema, model} = require ("mongoose")
const demo = new Schema ({
    Certificateid : { type:String , required:true},
    Candidatename : {type: String, required: true},
    Coursename : {type: String, required: true},
    Grade : {type:String, required:true},
    Date : {type:String, required: true}


})

demo.index({ CertID: 1 }, { unique: true });

const sample = model('details', demo)
module.exports=sample;