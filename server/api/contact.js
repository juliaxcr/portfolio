var nodemailer = require('nodemailer')
const router = require('express').Router()

// j edit
// if (process.env.NODE_ENV !== 'production') require('../../config')

// const secret = require('../../getParam')

// async function trial(){
//   try{
//     const pass = await secret.get();
//     console.log('SECRET', pass)
//   } catch(err){
//     console.log(err.stack)
//   }

// }

// trial()

module.exports = router
const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
}

// const transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

router.post('/', (req, res, next) => {
  const { name, email, message } = req.body
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: process.env.USER,
    subject: 'New Message from Website',
    text: content,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: 'fail' })
    } else {
      res.json({ msg: 'success' })
    }
  })
})
