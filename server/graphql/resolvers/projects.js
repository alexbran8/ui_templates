const e = require("cors");
const nodemailer = require("nodemailer");
const db = require("../../models");
const { sendNotificationError, notificationEmail } = require("../../middleware/notification")

const errorHandler = (err, req, res, next) => {
  const { code, desc = err.message } = err;
  res.status(code || 500).json({ data: null, error: desc });
};

const emailHandler = async (metadata) => {
  await metadata.transporter.sendMail({
    from: metadata.from,
    to: metadata.to,
    cc: metadata.cc,
    subject: metadata.subj,
    text: metadata.text,
    html: metadata.html
  });
};

module.exports = {
  Query: {
    async getAll(root, args, context) {
      try{
     let result = db.Projects.findAll({
        // where: { [Op.and]: [dateFilter, weekFilter, itvFilter, statusFilter, siteFilter, responsibleFilter] },
        // limit: args.first
      })
      return result
     
    }
      catch(err) {
        console.log(err)
        // send notification error
        sendNotificationError(err);
        return { message: err, success: false }

      }
      
    }
   
},
  Mutation: {
    async addItem(root, data, context) {
      try {
        console.log(data.data)      
        db.Projects.create(data.data)  
        const response = {message: 'Notifications have been successfully sent!', success: true}
        return  response  
      }
               
      catch (error) {
        console.log(error)
        const response = {message: error, success: false}
        return  response
      }
    },
    async editItem(root, data, context) {
      try {
        const { id, title, requirements, type, description,  coordinator } = data.data  
        console.log(title, requirements, type, description,  coordinator)   
        db.Projects.update(
          { title, requirements, type, description,  coordinator },
          { where: { id: id  } }
        );
        const response = {message: 'Notifications have been successfully sent!', success: true}
        return  response  
      }
               
      catch (error) {
        console.log(error)
        const response = {message: error, success: false}
        return  response
      }
    },
    async deleteItem(root, data, context) {
      try {
        let id = data.id
        db.Projects.destroy({ where: { id } });
        const response = {id:id, message: 'Notifications have been successfully sent!', success: true}
        return  response  
      }
               
      catch (error) {
        console.log(error)
        const response = {message: error, success: false}
        return  response
      }
    }
  }
}
