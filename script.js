var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
      nameError.innerHTML = 'Name is required';
      return false;
}

  nameError.innerHTML ="valid"
  return true;
}

function validatePhone(){
  var phone = document.getElementById('contact-phone').value;
  if(phone.length == 0){
    phoneError.innerHTML = 'Phone no is required';
    return false;  
  }
  if(phone.length == 10){
    phoneError.innerHTML ='Phone no should be 10 digits'
    return false;
  }
 }
function validateEmail(){
  var email = document.getElementById('contact-email').value;
  if(email.length == 0){
    phoneError.innerHTML = 'Email no is required';
    return false;
    }

    emailError.innerHTML='valid';
    return true;

  }
  function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required =30;
    var left = required - message.length;

    if(left>0){
      messageError.innerHTML = left + 'more characters required';
      return false;
    }

   messageError.innerHTML='valid';
    return true;
  }