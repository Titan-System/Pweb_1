
document.querySelector('.sub-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert(`¡Gracias por suscribirte con el correo: ${email}!`);
        this.reset();
    } else {
        alert('Por favor ingresá un correo válido.');
    }
});


document.querySelector('.opinion').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = this.querySelectorAll('input');
    const textarea = this.querySelector('textarea');

    const datos = {
        nombre: inputs[0].value.trim(),
        apellido: inputs[1].value.trim(),
        telefono: inputs[2].value.trim(),
        email: inputs[3].value.trim(),
        comentario: textarea.value.trim()
    };

    if (Object.values(datos).every(value => value !== '')) {
        alert(`Gracias por contactarte, ${datos.nombre}. Te responderemos pronto al correo ${datos.email}.`);
        this.reset();
    } else {
        alert('Por favor completá todos los campos.');
    }
});