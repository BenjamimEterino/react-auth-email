const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    pool: true,
    host: "mail.easyjobmz.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "no-reply@easyjobmz.com",
      pass: "utrQYX54U4587cU1",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
  });

  export const SendEmail = ({from, to, subject, text, html}) => {
    const msg = {from, to, subject, text, html};
    return transporter.sendMail(msg);
  };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   }); 
  