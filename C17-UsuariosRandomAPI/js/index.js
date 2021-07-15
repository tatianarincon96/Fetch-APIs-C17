// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
window.onload = () => {

    llamarApi();
    
    function llamarApi() {
        fetch('https://randomuser.me/api/')
            .then(response => {
                return response.json()
            })
            .then(data => {
                //manipulamos la respuesta
                console.log(data);
                renderizarDatosUsuario(data);
            }).catch(err => {
                alert("Ha ocurrido un error con la API \n" + err);
            });
    }
    
    function renderizarDatosUsuario(datos) {
        /* -------------------------------- CONSIGNA 1 -------------------------------- */
        // Aquí deben desarrollar una función que muestre en pantalla:
        // la foto, el nombre completo del usuario y su email.
        // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
        const nombre = datos.results[0].name;
        const foto = datos.results[0].picture;
        const email = datos.results[0].email;
    
        const tarjeta = document.querySelector("#tarjeta"); 
        const template = `
        <img src="${foto.large}" alt="foto">
        <h2>${nombre.title + " " + nombre.first + " " + nombre.last}</h2>
        <h3>${email}</h3>
        `;
    
        tarjeta.innerHTML = template;
    }
     
    /* --------------------------- CONSIGNA 2 (extra) --------------------------- */
    // Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
    // Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
    // Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
    const boton = document.querySelector("#random");
    boton.addEventListener("click",()=>{
        llamarApi();
    });
}
