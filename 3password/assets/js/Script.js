function verificarPassword() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    const password = digit1 + digit2 + digit3;

    const mensaje = document.getElementById('mensaje');

    if (password === '911') {
        mensaje.textContent = 'password 1 correcto';
    } else if (password === '714') {
        mensaje.textContent = 'password 2 correcto';
    } else {
        mensaje.textContent = 'password incorrecto';
    }
}