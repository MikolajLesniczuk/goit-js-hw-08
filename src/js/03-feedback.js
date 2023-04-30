import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const input = document.querySelector(`input[name="email"]`)
const textarea = document.querySelector(`textarea[name="message"]`)
const STORAGE_KEY = 'feedback-form-state'


const handleSubmit = (event) => {
event.preventDefault() ;

try {
const inputData = JSON.parse(localStorage.getItem(STORAGE_KEY)) 
const {
    email: inputEmail, 
    message: inputMessage
    } = inputData;


const submitted = {
email: inputEmail,
message: inputMessage
};

inputEmail.email = '';
inputMessage.message = ''; 

console.log('submitted data:', submitted);


localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));

form.reset();
localStorage.removeItem(STORAGE_KEY);

}

catch (error) {
    console.error("Set state error: ", error.message);
    alert("something wrong")
}

}

const newValue = (event) => {
event.preventDefault();

try{
const {email,message} = form;

const newData = {
    email: email.value,
    message: message.value
};


localStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
} 

catch (error) {

    console.error("Set state error: ", error.message);
    alert("something wrong")
}

}

const loadData = () => {
try {
    const inputData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || ""
    input.value = inputData.email || "";
    textarea.value = inputData.message || ""; }
catch (error) {
    console.error("Set state error: ", error.message);
    alert("something wrong")
}

}

 
    

window.addEventListener('load',loadData);
form.addEventListener('input',throttle(newValue,500));
form.addEventListener('submit',handleSubmit);

