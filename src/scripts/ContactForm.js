import contactCollection from "./ContactCollection"

import contactList from "./ContactList"
import contactData from "./DataManager";


const $ = document.querySelector.bind(document)

const addNewContact = () => {
    $("#addNewContact").addEventListener("click", () => {
        const name = $("#contactName").value
        const address = $("#contactAddress").value
        const phNo = $("#contactPhoneNo").value
        $("#contactName").value = ""
        $("#contactAddress").value = ""
        $("#contactPhoneNo").value = ""
        if ($("#addNewContact").textContent.startsWith("Update")) {
            const contact = {
                "name": name,
                "address": address,
                "phoneNo": phNo
            }
            $("#addNewContact").textContent = "Enter New Contact<"
            contactData.updateContact($("#contactId").value, contact)
            .then (contactList)
        }
        else {
            contactCollection.add(name, address, phNo).then(contactList)
        }
})
}

export default addNewContact