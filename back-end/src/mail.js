nodemailer = require('nodemailer');

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

  var mailOptions = {
    from: 'no-reply@easyjobmz.com',
    to: 'benjamim.eterino@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  


  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
  