import contactCollection from "./ContactCollection"

import contactList from "./ContactList"


const $ = document.querySelector.bind(document)

const addNewContact = () => {
    $("#addNewContact").addEventListener("click", () => {
        const name = $("#contactName").value
        const address = $("#contactAddress").value
        const phNo = $("#contactPhoneNo").value
        contactCollection.add(name, address, phNo).then(
            () => contactList()
        )
    })
}

export default addNewContact