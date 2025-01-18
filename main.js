const form = document.querySelector('.form');
const submit = form.querySelector('.form__submit');
const emailInput = form.querySelector('.form__input');
const errorMsg = form.querySelector('.form__error');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const isEmailValid = emailRegex.test(emailInput.value);

  if (!isEmailValid) {
    errorMsg.textContent =
      emailInput.value.length === 0
        ? 'Whoops! It looks like you forgot to add your email'
        : 'Please provide a valid email address';

    form.classList.add('form--error');
  } else {
    form.classList.remove('form--error');
  }
});
