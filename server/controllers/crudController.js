const CrudModel = require('../models/data');


const createData=async(req,res)=>{
        const {name,email,desc} =req.body;
        if(!name)
        {
   return res.status(401).json({success:false,msg:"name is required"});
        }
        if(!email)
        {
  return  res.status(401).json({success:false,msg:"email is required"});

        }
        if(!desc)
        {
  return  res.status(401).json({success:false,msg:"desc is required"});
        }

        try {
            const data = await CrudModel.create({
                name,email,desc
            })
  return  res.status(200).json({success:false,msg:"create Successfully"});


        } catch (error) {
  return  res.status(401).json({success:false,msg:"Not Complete"});
        
        }
}

const AllData=async(req,res)=>{
    const data = await CrudModel.find({});
    res.status(200).json({data});
}

const deleteData =async(req,res)=>{
    const id = req.params.id;
    const data = await CrudModel.findByIdAndDelete(id);
    res.status(200).json({data});


}
const UpdateData =async(req,res)=>{
   try {
    const id = req.params.id;
    const {name,email,desc}= req.body;
    console.log(name,email,desc)
    const data = await CrudModel.findByIdAndUpdate(id,{name,email,desc},{new:true});
    res.status(200).json({data});
   } catch (error) {
    console.log(error.message);
    res.status(500).json({msg:error.message});
    
   }


}
module.exports={
    createData,
    AllData,
    deleteData,
    UpdateData
}