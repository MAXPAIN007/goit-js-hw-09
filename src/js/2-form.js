let formData = { email: '', message: '' };
const formElem = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(localStorageKey));

if (savedData) {
  formElem.elements.email.value = savedData.email || '';
  formElem.elements.message.value = savedData.message || '';
  formData = savedData;
}

formElem.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();
  formData = { email: email, message: message };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formElem.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  formElem.reset();
});
