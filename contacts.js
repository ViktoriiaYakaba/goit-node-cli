const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, './db/contacts.json' );
 

async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const data = await listContacts();
  const result = data.find(item => item.contactId === contactId)
  return result || null;
}

async function removeContact(contactId) {
  const data = await listContacts();

}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
