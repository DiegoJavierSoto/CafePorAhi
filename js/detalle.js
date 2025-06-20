// Reutilizamos el array de cafés
const cafes = [
  {
    nombre: "La Taza Mística",
    ambiente: "Tranquilo",
    valoracion: 4.7,
    reseñas: 102,
    imagen: "images/cafe_taza_mistica.jpg",
    zona: "Plaza Mitre",
    extras: ["Wi-Fi"],
    reseña: "Un refugio aromático entre libros viejos y jazz suave. Ideal para desconectar.",
  },
  {
    nombre: "Café Brisa",
    ambiente: "Moderno",
    valoracion: 4.3,
    reseñas: 78,
    imagen: "images/cafe_brisa.jpg",
    zona: "Alem",
    extras: ["Pet Friendly"],
    reseña: "Minimalismo en su máxima expresión. Café fuerte, y buena charla asegurada.",
  },
  {
    nombre: "Café Aurora",
    ambiente: "Tranquilo",
    valoracion: 4.8,
    reseñas: 132,
    imagen: "images/cafe_aurora.jpg",
    zona: "Plaza España",
    extras: ["Wi-Fi", "Pet Friendly"],
    reseña: "Auroras suaves, luces tenues y la dosis justa de caffeína para inspirarte.",
  },
  {
    nombre: "Filtro Sur",
    ambiente: "Moderno",
    valoracion: 4.5,
    reseñas: 89,
    imagen: "images/cafe_filtro_Sur.jpg",
    zona: "Güemes",
    extras: ["Sin TACC", "Wi-Fi"],
    reseña: "Espacio para quienes buscan café de especialidad y pastelería sin gluten con onda.",
  },
  {
    nombre: "Barista Nocturno",
    ambiente: "Vintage",
    valoracion: 4.6,
    reseñas: 105,
    imagen: "images/cafe_barista_Noc.jpg",
    zona: "Centro",
    extras: ["Wi-Fi"],
    reseña: "Un lugar con alma de película y aroma a espresso clásico. Perfecto para noctámbulos.",
  },
  {
    nombre: "Expresso Vivo",
    ambiente: "Moderno",
    valoracion: 4.3,
    reseñas: 92,
    imagen: "images/cafe_expreso_Vivo.jpg",
    zona: "Alem",
    extras: ["Sin TACC", "Pet Friendly"],
    reseña: "Donde la energía se sirve caliente y con ritmo. Café y vibra en cada sorbo.",
  }
];

// 🔍 Función para obtener parámetros de la URL
function getParam(nombre) {
  const url = new URL(window.location.href);
  return decodeURIComponent(url.searchParams.get(nombre) || "");
}

// 🔧 Mostrar el detalle
function mostrarDetalle(cafe) {
  const contenedor = document.getElementById("detalleCafe");

  contenedor.innerHTML = `
  <div class="row">
    <div class="col-md-6">
      <img src="${cafe.imagen}" alt="${cafe.nombre}" class="img-fluid rounded shadow-sm" />
    </div>
    <div class="col-md-6">
      <h2 class="mb-3">${cafe.nombre}</h2>
      <p><strong>Ambiente:</strong> ${cafe.ambiente}</p>
      <p><strong>Zona:</strong> ${cafe.zona}</p>
      <p><strong>Extras:</strong> ${cafe.extras.join(", ")}</p>
      <p><strong>Valoración:</strong> ⭐ ${cafe.valoracion} (${cafe.reseñas} reseñas)</p>
      <p class="mt-4">${cafe.reseña}</p>
    </div>
  </div>

  <div class="mt-5">
    <h5>Ubicación aproximada</h5>
    <div class="ratio ratio-16x9 mt-4" style="height: 450px;">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89617.75248317058!2d-57.58454664301132!3d-38.01174018930717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1750278014485!5m2!1ses-419!2sar"
        style="border:0; border-radius: 8px;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
`;
}

// 🚀 Buscar el café y mostrarlo
const nombreParam = getParam("cafe").toLowerCase();
const cafeEncontrado = cafes.find(c => c.nombre.toLowerCase().includes(nombreParam));

if (cafeEncontrado) {
  mostrarDetalle(cafeEncontrado);
} else {
  document.getElementById("detalleCafe").innerHTML = `<p>No se encontró información de la cafetería seleccionada.</p>`;
}