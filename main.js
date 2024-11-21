// JavaScript para mostrar/ocultar información en noticias
document.querySelectorAll('.tarjetaNoticia h3').forEach((titulo) => {
    titulo.addEventListener('click', () => {
        const contenido = titulo.nextElementSibling; // Selecciona el párrafo debajo del título
        contenido.style.display = contenido.style.display === 'none' ? 'block' : 'none';
    });
});


// Datos de agencias
const agencias = [
    {
        nombre: "Expedia",
        descripcion: "Expedia es una agencia de viajes en línea...",
        img: "img/agencia1-removebg-preview.png",
        link: "https://www.expedia.com"
    },
    {
        nombre: "Booking.com",
        descripcion: "Booking.com es una de las plataformas más populares...",
        img: "img/agencia2-removebg-preview.png",
        link: "https://www.booking.com"
    },
    {
        nombre: "Despegar",
        descripcion: "Despegar es una de las agencias más grandes de América Latina...",
        img: "img/agencia3-removebg-preview.png",
        link: "https://www.despegar.com.ar"
    }
];

// Generar contenido dinámico
const agenciasGrid = document.querySelector('.agenciasGrid');
agencias.forEach((agencia) => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjetaAgencia');
    tarjeta.innerHTML = `
        <img src="${agencia.img}" alt="${agencia.nombre}" class="imagenAgencia">
        <div class="infoAgencia">
            <h3>${agencia.nombre}</h3>
            <p>${agencia.descripcion}</p>
        </div>
        <a href="${agencia.link}" target="_blank" class="botonIr">Ir</a>
    `;
    agenciasGrid.appendChild(tarjeta);
});

