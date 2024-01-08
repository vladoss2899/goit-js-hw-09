const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', formData);

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;
  if (!emailValue || !messageValue) {
    alert('Заповніть всі поля!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}

function formData() {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const parsedSavedMessage = JSON.parse(savedMessage);
    form.elements.email.value = parsedSavedMessage.email;
    form.elements.message.value = parsedSavedMessage.message;
  }
}
