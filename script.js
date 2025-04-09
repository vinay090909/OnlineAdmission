function showLogin() {
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('register-form').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
}

function closeModal() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
}

let users = {};

function register() {
    let username = document.getElementById('register-username').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    
    if (username && email && password) {
        users[username] = { email, password };
        alert('Registration successful');
        closeModal();
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    if (users[username] && users[username].password === password) {
        alert('Login successful');
        closeModal();
    } else {
        alert('Invalid credentials.');
    }
}
