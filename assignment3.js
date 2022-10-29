const firstNameInput = document.getElementById("firstName")
const saveBtn= document.getElementById("save")
const Mylist =document.getElementById("myList")

const getElementValue= (element) => {
     return element.value
}

saveBtn.addEventListener("click", (event) => {
    event.preventDefault ();

    const FirstNameValue = getElementValue(firstNameInput)

    const list = document.createElement("ol")

    const FirstNameli = document.createElement("li")
    FirstNameli . innerHTML = FirstNameValue
    list . appendChild(FirstNameli)



Mylist.appendChild(list)
}
)



