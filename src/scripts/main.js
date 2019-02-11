import contactList from "./ContactList"
import addNewContact  from "./ContactForm"
import contactCollection from "./ContactCollection"

addNewContact()
contactList().then (contactCollection.delete)
