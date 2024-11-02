const person = document.getElementById("person");
const message = document.getElementById("message");
const linkButton = document.getElementById("linkButton");

const messages = [
    "¡Hola! ¿Cómo están?",
    "Estamos aquí para escucharte y aconsejarte.",
    "¿Qué te gustaría compartir? Recuerda que aquí estamos para hablar de tus emociones.",
    "Hoy nos presentaremos cada uno con todo lo que nos identifica.",
    "Si estás interesado, dale clic al botón."
];

let index = 0;

person.addEventListener("click", function() {
    // Muestra el siguiente mensaje
    if (index < messages.length) {
        message.innerText = messages[index];
        message.style.opacity = 1; // Muestra el mensaje
        index++;
    }

    // Cuando se muestra el último mensaje, mostrar el botón
    if (index === messages.length) {
        linkButton.style.display = "inline-block"; // Muestra el botón
    }
});
