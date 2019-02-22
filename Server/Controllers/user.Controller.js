const userService=require('../Services/UserServices');
const util=require('../util/token');
const sentMail=require('../MiddleWare/sendMail');

exports.registration=(req,res)=>{
    var responseResult={};
    userService.registration(req.body,(err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}


exports.login=(req,res)=>{
    var responseResult=[];

    userService.login(req.body,(err,result)=>{
        if(err){
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}


exports.getUser=(req,res)=>{
    var responseResult={};
    userService.getUserEmail(req.body,(err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;

            const payload={
                user_id:responseResult.result._id
            }
            console.log(payload);
            const obj=util.GenerateTocken(payload);
            console.log("controller obj",obj);

            const url='http://localhost:3000/resetPassword/${obj.token}';
            sentMail.sendEmailFuncton(url);
            //send email using this token generated
            res.status(200).send(url);
        }
    })
}


exports.sendResponse=(req,res)=>{
    var responseResult={};
    console.log("in user control send token is verified response");

    userService.redirect(req.decoded,(err,result)=>{
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            console.log("in user control token is verified giving response");
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}


exports.setPassword=(req,res)=>{
    var responseResult={};
    userService.resetPass(req,(err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            console.log("in user control token is verified giving response");
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}


module.exports.getAllUsers=(req,res)=>{
    var responseResult={};
    userService.getAllUsers((err,result)=>{
        if(err)
        {
            responseResult.success=false;
            responseResult.error=err;
            res.status(500).send(responseResult);
        }
        else
        {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}