function addToCart(productName) {
    alert("¡Producto "+productName+" agregado al carrito!");
}

function showContact(){
    const contactInfo = document.getElementById("contact-info");
    if (contactInfo.style.display === "none"){
        contactInfo.style.display = "block";
    }else{
        contactInfo.style.display = "none";
    }
}
const registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        // Detiene el envío automático del formulario al servidor
        event.preventDefault(); 
        
        // Obtenemos los valores ingresados por el usuario
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Limpiamos los mensajes de error previos
        document.getElementById("error-fullName").textContent = "";
        document.getElementById("error-email").textContent = "";
        document.getElementById("error-password").textContent = "";

        let isValid = true;

        // TODO: Escribe tus condicionales de validación aquí
        // Ejemplo para el nombre:
        if (fullName === "") {
            document.getElementById("error-fullName").textContent = "El nombre es obligatorio.";
            isValid = false;
        }

        // TODO: Agrega una validación para el correo (que tenga '@') 
        // y para la contraseña (que tenga al menos 6 caracteres)

        if (isValid) {
            alert("¡Registro exitoso! Bienvenido a Walmort.");
            registerForm.reset(); // Limpia los campos del formulario
        }
    });
}