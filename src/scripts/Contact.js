
import printToDOM from "./PrintToDom"

const createHTML = (contactInfo) => {
    return `
        <section>
            <h2> ${contactInfo.name}</h2>
            <div> ${contactInfo.address}</div>
            <div> ${contactInfo.phoneNo} </div>
            <button id = "deleteButton--${contactInfo.id}">Delete ${contactInfo.name}</button>
        </section>
    `
}

const contact = (contactInfo) => {
    printToDOM(createHTML(contactInfo), ".contactList")
}

export default contact