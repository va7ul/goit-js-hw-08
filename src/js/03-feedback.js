const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const data = {
    email: '',
    message: '',
};

refs.form.addEventListener('input', throttle(saveTextInput, 500));
refs.form.addEventListener('submit', submitFormInput);

populateInputForm();

function saveTextInput() {
    data.email = refs.input.value;
    data.message = refs.textarea.value;

    const dataJSON = JSON.stringify(data);

    localStorage.setItem(STORAGE_KEY, dataJSON);
};

function populateInputForm() {
    const savedDataJSON = localStorage.getItem(STORAGE_KEY);
    let savedData = {};
    if (savedDataJSON) {
        try {
            savedData = JSON.parse(savedDataJSON);
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        };
        refs.input.value = savedData.email;
        refs.textarea.value = savedData.message;

        data.email = refs.input.value;
        data.message = refs.textarea.value;
    }
};

function submitFormInput (event) {
    event.preventDefault();

    if (refs.input.value === "" || refs.textarea.value === "") {
        alert('Не всі поля заповнені!');
    } else {
        console.log(data);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
};
