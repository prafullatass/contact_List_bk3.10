
import contactCollection from "./ContactCollection"
import contact from "./Contact"


const contactList = () => {
    document.querySelector(".contactList").innerHTML = ""
    return contactCollection.view().then(
        (contacts) => {
            contacts.forEach(person => {
                contact(person)
            });
        }
    )
}

export default contactList
