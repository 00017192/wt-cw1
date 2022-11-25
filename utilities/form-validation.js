// get form and form elements
const form = document.querySelector("form");

const name_input = form.querySelector("input#name");
const number_input = form.querySelector("input#number");
const email_input = form.querySelector("input#email");

const name_error_text = form.querySelector("span.name-error");
const number_error_text = form.querySelector("span.number-error");
const email_error_text = form.querySelector("span.email-error");

// validate form inputs
const validate_name = () => {
  name_input.value = name_input.value.trim();
  if (name_input.value.length === 0) {
    return "Empty"
  } else {
    return "Success";
  }
}

const validate_number = () => {
  number_input.value = number_input.value.trim();
  if (number_input.value.length === 0) {
    return "Empty";
  } else if (!/^[0-9]+$/.test(number_input.value)) {
    return "Please enter only digits";
  } else {
    return "Success";
  }
}

const validate_email = () => {
  email_input.value = email_input.value.trim();
  if (email_input.value.length === 0) {
    return "Empty";
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email_input.value)) {
    return "Enter valid email address";
  } else {
    return "Success";
  }
}

// event listener on submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let error = false;

  if (validate_name() !== "Success") {
    name_input.classList.add("error");
    name_error_text.textContent = validate_name();
    error = true;
  } else {
    name_input.classList.remove("error");
  }

  if (validate_number() !== "Success") {
    number_input.classList.add("error");
    number_error_text.textContent = validate_number();
    error = true;
  } else {
    number_input.classList.remove("error");
  }

  if (validate_email() !== "Success") {
    email_input.classList.add("error");
    email_error_text.textContent = validate_email();
    error = true;
  } else {
    email_input.classList.remove("error");
  }

  if (!error) {
    alert("✅Thank you");
    name_input.value = "";
    number_input.value = "";
    email_input.value = "";
  }
})

// remove error on keydown
name_input.addEventListener("keydown", () => {
  if (name_input.classList.contains("error")) {
    name_input.classList.remove("error");
  }
})

number_input.addEventListener("keydown", () => {
  if (number_input.classList.contains("error")) {
    number_input.classList.remove("error");
  }
})

email_input.addEventListener("keydown", () => {
  if (email_input.classList.contains("error")) {
    email_input.classList.remove("error");
  }
})