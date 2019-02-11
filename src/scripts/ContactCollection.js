

// const contactArray = [
//     {
//         "id": 1,
//         "name": "Praful",
//         "address": "Franklin, TN",
//         "phoneNo": "615668"
//     }
// ]
import contactData from "./DataManager"
import contactList from "./ContactList"

const contactArray = () => {
    contactData.getContacts().then(contacts => {
        return contacts
    })
}
const contactCollection = {
    view: () => {
        return contactData.getContacts().then(contacts => {
            return contacts
        })
    },
    add: function (name, address, phoneNo) {
        //const new_id = contactArray.length + 1
        // contactArray.push({
        //     id : new_id,
        //     name: name,
        //     address: address,
        //     phoneNo: phoneNo
        // })
        const newContact = {
            "name": name,
            "address": address,
            "phoneNo": phoneNo
        }
        return contactData.createContact(newContact)
    },
    search: (whatToSearch) => contactArray.find(contact => contact.includes(whatToSearch)),
    delete: () => {
        const contactListEl = document.querySelector(".contactList")
        contactListEl.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteButton--")) {
                const contactId = event.target.id.split("--")[1]
                contactData.deleteContact(contactId)
                    .then(contactList)
            }
        })

    }
}

export default contactCollection

