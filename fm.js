const firstNameInput = document.getElementById("firstName")
const lastNameInput= document.getElementById("lastName")
const emailInput= document.getElementById("emailAddress")
const saveBtn= document.getElementById("save")
const tableBody =document.getElementById("tableBody")

const getElementValue= (element) => {
     return element.value
}

saveBtn.addEventListener("click", (event) => {
    event.preventDefault ();

    const FirstNameValue = getElementValue(firstNameInput)
    const LastNameValue = getElementValue(lastNameInput)
    const emailValue = getElementValue(emailInput)

    const tableRow = document.createElement("tr")

    const FirstNameTd = document.createElement("td")
    FirstNameTd . innerHTML = FirstNameValue
    tableRow . appendChild(FirstNameTd)

    const LastNameTd = document.createElement("td")
    LastNameTd . innerHTML = LastNameValue
    tableRow . appendChild(LastNameTd)

    const emailTd = document.createElement("td")
    emailTd . innerHTML = emailValue
    tableRow . appendChild(emailTd)

tableBody.appendChild(tableRow)
}
)



