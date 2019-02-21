const userModel=require('../Application/Model/userModel');

exports.login=(data,callback)=>{
    userModel.login(data,(err,result)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,result)
        }
    })
}

exports.registeration=(data,callback)=>{
    userModel.registeration(data,(err,result)=>{
        if(err)
        {
            console.log("service error");
            callback(err);        
        }
        else
        {
            console.log("In service",result);
            callback(null,result);
        }
    })
}


exports.redirect=(data,callback)=>{
    userModel.confirmUser(decoded,(err,result)=>{
        if(err)
        {
            callback(err)
        }
        else
        {
            callback(null,result);
        }
    })
}


exports.getUserEmail=(data,callback)=>{
    userModel.findUserEmail(data,(err,result)=>{
        if(err)
        {
            callback(err)
        }
        else
        {
            callback(nul,result)
        }
    })
}

exports.resetPass=(req,callback)=>{
    userModel.updateUserPassword(req,(req,result)=>{
        if(err)
        {
            callback(err);
        }
        else{
            callback(null,result)
        }
    })
}


exports.getAllUsers=(data,callback)=>{
    userModel.getAllUsers(data,(err,result)=>{
        if(err)
        {
            callback(err)
        }
        else
        {
            callback(null,result);
        }
    })
}