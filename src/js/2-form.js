const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', onFormInput);

populateForm();

function handleSubmit(event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (emailValue && messageValue) {
    console.log({
      email: emailValue,
      message: messageValue,
    });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert('If you don`t fill the fields, nothing gonna happens:)');
  }
}

function onFormInput(event) {
  if (event.target.matches('input[name="email"], textarea[name="message"]')) {
    const currentState = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
  }
}

function populateForm() {
  const storedState = localStorage.getItem(STORAGE_KEY);

  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    emailInput.value = email;
    messageInput.value = message;
  }
}
