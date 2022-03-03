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
      let new_id = await db.sequelize.query("Select nextval(pg_get_serial_sequence('projects', 'id')) as new_id;")
      data.data.id = new_id[0][0].new_id
      data.data.createdBy = context.user.username
      console.log(context)
      return new Promise((resolve, reject) => {

        db.Projects.create(data.data).then(res => {

          return resolve({ message: 'OK', success: true, data: data.data })
        }).catch(function (err) {
          console.log(err)
          // send notification error
          sendNotificationError(err, data.data.createdBy);
          return reject({ message: err, success: false })

        });
      })
    },
    async editItem(root, data, context) {
      return new Promise((resolve, reject) => {
        const dataToUpdate = data.data
        // console.log (dataToUpdate.uid)
        let uid = dataToUpdate.id
        dataToUpdate.createdBy = context.user.username
        // console.log(dataToUpdate.process_status,'xxxx')
        db.Projects.update(
          dataToUpdate,
          { where: { id: uid } }
        )
          .then(res => {
            console.log(res)
            return resolve({ message: 'OK', success: true, data: dataToUpdate });
          }
          )
          .catch(function (err) {
            // handle error;
            console.log(err);
            console.log(data.data)
            sendNotificationError(err, data.data.createdBy);
            return reject({ message: err, success: false, data:null })
          });
      })
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
