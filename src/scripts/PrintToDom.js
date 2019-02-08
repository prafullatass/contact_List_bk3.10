
const printToDOM = (whatToPrint, whereToPrint) => {
    document.querySelector(whereToPrint).innerHTML += whatToPrint
}

export default printToDOM

