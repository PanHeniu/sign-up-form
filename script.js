function checkPasswords() {
    let password1 = document.getElementById('password');
    let password2 = document.getElementById('password-confirm');
    let info = document.getElementById('passwords-info')
    if (password1.value !== password2.value) {
        password1.classList.add('wrong-passwords');
        password2.classList.add('wrong-passwords');
        info.textContent = '* Passwords do not match';
    } else {
        password1.classList.remove('wrong-passwords');
        password2.classList.remove('wrong-passwords');
        info.textContent = '';
    };
};