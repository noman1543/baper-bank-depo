
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-pass');
    const password = passField.value;
    // console.log(email, password);
    if (email === 'sontan@baap.com' && password === 'secret') {
        location.href = 'bank.html';
    } else {
        alert('invalid user');
    }

});
