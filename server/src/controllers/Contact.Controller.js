const ContactModel = require("../models/Contact.Movie")

const GetContact= async (req, res) => {
  const contacts=await ContactModel.find()
  res.send(contacts)
}

const GetContactById = async (req, res) => {
   const {id} =req.params
   const target=await ContactModel.findById(id)
res.send(target)
}

const PostContact= async (req, res, next) => {
   const newContact=await new ContactModel({
    ...req.body
   })
   newContact.save()
   res.send(newContact)
}

const DeleteContact = async (req, res) => {
    const { id } = req.params
  const newContact=await ContactModel.findByIdAndDelete(id)
res.send("delete")
}

const UpdateContact = async (req, res) => {
    const { id } = req.params
    Contact.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.status(200).json({ message: "Update" })
        } else {
            res.status(404).json({ message: err })
        }
    })

}

module.exports = {
    GetContact,
    GetContactById,
    PostContact,
    DeleteContact,
    UpdateContact
}