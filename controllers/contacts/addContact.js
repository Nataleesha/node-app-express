const Contact = require("../../models/contact");

const addContact = async ({ name, email, phone, favorite }) => {
  const newContact = {
    name,
    email,
    phone,
    favorite,
  };
  await Contact.create(newContact);
  return newContact;
};

module.exports = addContact;