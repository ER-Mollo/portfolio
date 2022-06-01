const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const num = document.getElementById('num');
const com = document.getElementById('com');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorCheck();
});

function errorCheck(){
    const fnameV = fname.value.trim();
    const emailV = email.value.trim();
    const numV = num.value.trim();
    const comV = com.value.trim();

    if (fnameV == ""){
        setError(fname, "Firstname cannot be blank");
    }else {
        setSuccess(fname);
    }

    if (emailV == ""){
        setError(email, "Please fill in your email address");
    
    }else {
        setSuccess(email);
    }

    if (numV == ""){
        setError(num, "Cell number cannot be blank");
    
    }else if(num.length < 10 && num.length > 10){
        setError(num, "Invalid Cell number");
    }else {
        setSuccess(num);
    }

    if (comV == ""){
        setError(com, "Please comment above");
    } else {
        setSuccess(fname);
    }
}
function setError(element, message){
    const control = element.parentElement;
    if(control.classList.contains('success')){
        control.classList.remove('success');
    }
    control.classList.add('error');
    const small = control.querySelector('small');
    small.textContent = message;

}
function setSuccess(element){
    const control = element.parentElement;
    if(control.classList.contains('error')){
        control.classList.remove('error');
    }
    control.classList.add('success');
}







const myName = document.getElementById('myname').innerHTML;
myName = "Ellen <nav> Refilwe </nav> Mollo"

