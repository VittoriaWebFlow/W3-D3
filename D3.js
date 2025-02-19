const Footer1 = document.getElementById('Years')
const Year = new Date().getFullYear() + " "
Footer1.innerText = Year

const formPage = document.getElementById('New-contact')
formPage.addEventListener('submit', (e) => {
    e.preventDefault()
console.log("QUA CI SONO I DATI DEL FORM")

const FirstNameInput = document.getElementById('firstname')
const LastNameInput = document.getElementById('lastname')
const EmailInput = document.getElementById('email')
const PhoneNumberInput = document.getElementById('phonenumber')

const Contact = {
    firstname: FirstNameInput.value,
    lastname: LastNameInput.value,
    email: EmailInput.value,
    phonenumber: PhoneNumberInput.value,
}
console.log('Contatti', Contact)


const Card = document.createElement('div')
Card.classList.add('contactCard')
Card.innerHTML =` 
<p>${Contact.firstname} ${Contact.lastname}</p>
<p>${Contact.email}</p>
<p>${Contact.phonenumber}</p>
<button onclick="deleteCard">ELIMINA</button>` 

const carta= document.getElementById('Contact')
carta.appendChild(Card)

FirstNameInput.value=""
LastNameInput.value=""
EmailInput.value=""
phonenumber.value=""

})
const deleteCard = function (){
    console.log('ELIMINA', e.target.parenElement)
    const pressedButton = e.target
    const cardToRemove = pressedButton.parenElement
    cardToRemove.remove()
}