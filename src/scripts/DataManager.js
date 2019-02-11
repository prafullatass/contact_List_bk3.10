
const contactData = {
    getContacts: () => {
        return fetch("http://localhost:8088/contacts")
            .then(res => res.json())
    },
    createContact: (orderObject) => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderObject)
        })
            .then(res => res.json())
    },
    deleteContact: (contactNo) => {
        return fetch(`http://localhost:8088/contacts/${contactNo}`, {
            method: "DELETE"
        })
    },
    getSingleContact: (contactNo) => {
        return fetch(`http://localhost:8088/contacts/${contactNo}`)
            .then(res => res.json())
    },
    updateContact: (contactNo, contact) => {
        return fetch(`http://localhost:8088/contacts/${contactNo}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
            .then(res => res.json())
    }
}




export default contactData