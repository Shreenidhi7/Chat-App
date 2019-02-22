mongoose=require('mongoose');
//create instance of schema
var mongoSchema=mongoose.Schema;
//create schema
var chatSchema=new mongoSchema({
    'senderId':{
        type:String
    },
    'receiverId':{
        type:String
    },
    'message':{
        type:String
    }
    },

    {
        timestamps:true
    });

    function chatModel() {}
    //{
        var chat=mongoose.model('chat',chatSchema);
        chatModel.prototype.addMessage=(chatData,callback)=>{

        
        console.log('chatData model-->',chatData);
        const newMsg=new chat({
            'senderId':chatData.senderId,
            'receiverId':chatData.receiverId,
            'message':chatData.message
        });
        
        newMsg.save((err,result)=>{
            if(err)
            {
                console.log("message saved error");
                return callback(err)
            }
            else
            {
                console.log("message saved successfully");
                return callback(null,result)
            }
        });
    }


chatModel.prototype.getAllUserChats=(callback)=>{
    chat.find({},(err,result)=>
    {
        if(err)
        {
            callback(err);
        }
        else
        {
            callback(null,result);
        }
    });
}
    
module.exports=new chatModel();