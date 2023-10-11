
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

const pwd = document.getElementById('password')
const cbx = document.getElementById('checkbox')

  cbx.onchange = function (e) {
    pwd.type = cbx.checked ? "text" : "password"
  }

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 8) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }

}
function email_Verify() {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
}
function pass_Verify() {
  if (password.value.length >= 5) {
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}

const form = document.getElementById('form1');
const formFileds = form.elements;

const submitBtn = form.querySelector('[type="submit"]')

submitBtn.addEventListener('click', clearStorage);

function clearStorage() {

}

function changeHandler() {
  if (this.type !== 'checkbox') {
    console.log(this.name, this.value);
    localStorage.setItem(this.name, this.value)
  } else {
    console.log(this.name, this.checked);
    localStorage.setItem(this.name, this.checked)
  }
}

function checkStorage() {
  for (let i = 0; i < formFileds.length; i++) {
    if (formFileds[i].type !== 'submit') {
      if (formFileds[i].type === 'checked') {
        formFileds[i].checked = localStorage.getItem(formFileds[i].name)
      } else {
        formFileds[i].value = localStorage.getItem(formFileds[i].name)

      }
    }
  }
  atachEvents();
}
function atachEvents() {
  for (let i = 0; i < formFileds.length; i++) {
    formFileds[i].addEventListener('change', changeHandler)
  }
}
checkStorage()

window.addEventListener('storage', () => {
  console.log('storage has changed');
});

