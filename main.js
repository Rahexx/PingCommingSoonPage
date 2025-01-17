const form = document.querySelector('.form');
const submit = form.querySelector('.form__submit');
const emailInput = form.querySelector('.form__input');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const isEmailValid = emailRegex.test(emailInput.value);

  if (isEmailValid) form.classList.remove('form--error');
  else form.classList.add('form--error');
});
