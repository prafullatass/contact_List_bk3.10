
import printToDOM from "./PrintToDom"

const createHTML = (contactInfo) => {
    return `
        <section>
            <h2> ${contactInfo.name}</h2>
            <div> ${contactInfo.address}</div>
            <div> ${contactInfo.phoneNo} </div>
        </section>
    `
}

const contact = (contactInfo) => {
    printToDOM(createHTML(contactInfo), ".contactList")
}

export default contact