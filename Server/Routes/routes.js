const express=require('express');
const router=express.Router();
const userController=require("../Controllers/user.Controller");
const chatController=require('../Controllers/chat.Controller');
const loginMiddleware=require('../MiddleWare/')//incomplete

router.post('/login',userController.login);
router.post('/registration',userController.registration);
router.post('/verifyUser',userController.getUser);
router.post('/resetpassword/:token',loginMiddleware.checkToken,userController.setPassword); //some doubt
router.post('/addMesasge',chatController.addMessage);
router.get('/getAllUsers',userController.getAllUsers);
router.get('/getAllChats',chatController.getAllUserChats);


module.exports=router;