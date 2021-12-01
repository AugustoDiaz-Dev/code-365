const user = document.getElementById('user');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (user.value === '' || user.value == null) {
        messages.push('User name is required');
    }
    if (password.value.length < 6) {
        messages.push('Password must be longer than 6 characters.');
    }
    if (password.value.length > 10) {
        messages.push('Password must be less than 10 characters.');
    }
    if (password.value === 'password') {
        messages.push('Password can not be \'password\'');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(', ');
    }
    if (user.value === 'augusto' && password.value === 'augusto') {
        alert("Welcome " + user.value);
    }
});
