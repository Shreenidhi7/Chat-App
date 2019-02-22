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
    service:'gmail',
    auth:{
        /***
         * env creating and accesses the data from env
         */
    user:process.env.email,
    pass:process.env.password
    },
});


const mailOptions={
    from:process.env.email,
    /**
     * sender address
     */
    to:process.env.email,
    /**
     * list of receivers
     */
    subject:'node.js send mail',

    text:'verification link is:\n\n' +url
};
/**
 * validating the errors through callback function passing err and info parameters along mail option parameter
 */

 transporter.sendMail(mailOptions,(err,info)=>{
     if(err)
     console.log("error on sent mail"+err);
     else
     console.log("result sent on mail"+info); 
 });
}




















 