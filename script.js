document.querySelector('.contact-icon').addEventListener('click', () => {
    document.getElementById('contact-form').classList.toggle('hidden');
});

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Mensaje enviado:\n\nDe: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`);

    document.getElementById('form').reset();
});
