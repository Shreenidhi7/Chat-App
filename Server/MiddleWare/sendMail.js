/**
 * define the nodemailers by const variable
 */

const nodemailer=require('nodemailer');

/**
 * Here we are Configuring our STMP server details.
 * STMP is mail server which is reponsible for sending
 */

 exports.sendEmailFunction=(url)=>{
     /**
      * creating transport obj send mail
      */
const transporter=nodemailer.createTransport({
    service:ge
})

 }