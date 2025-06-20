// Lista de cafeterías ficticias
const cafes = [
  {
    nombre: "La Taza Mística",
    ambiente: "Tranquilo",
    valoracion: 4.7,
    reseñas: 102,
    imagen: "images/cafe_taza_mistica.jpg",
    zona: "Plaza Mitre",
    extras: ["Wi-Fi"],
  },
  {
    nombre: "Café Brisa",
    ambiente: "Moderno",
    valoracion: 4.3,
    reseñas: 78,
    imagen: "images/cafe_brisa.jpg",
    zona: "Alem",
    extras: ["Pet Friendly"],
  },
  {
    nombre: "Café Aurora",
    ambiente: "Tranquilo",
    valoracion: 4.8,
    reseñas: 132,
    imagen: "images/cafe_aurora.jpg",
    zona: "Plaza España",
    extras: ["Wi-Fi", "Pet Friendly"],
  },
  {
    nombre: "Filtro Sur",
    ambiente: "Moderno",
    valoracion: 4.5,
    reseñas: 89,
    imagen: "images/cafe_filtro_Sur.jpg",
    zona: "Güemes",
    extras: ["Sin TACC", "Wi-Fi"],
  },
  {
    nombre: "Barista Nocturno",
    ambiente: "Vintage",
    valoracion: 4.6,
    reseñas: 105,
    imagen: "images/cafe_barista_Noc.jpg",
    zona: "Centro",
    extras: ["Wi-Fi"],
  },
  {
    nombre: "Expresso Vivo",
    ambiente: "Moderno",
    valoracion: 4.3,
    reseñas: 92,
    imagen: "images/cafe_expreso_Vivo.jpg",
    zona: "Alem",
    extras: ["Sin TACC", "Pet Friendly"],
  }
];

// Función para renderizar cafeterías
function mostrarCafeterias(lista) {
  const resultsDiv = document.getElementById("cafeResults");
  resultsDiv.innerHTML = "";

  lista.forEach(cafe => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card card-cafe shadow-sm">
        <img src="${cafe.imagen}" class="card-img-top" alt="${cafe.nombre}" />
        <div class="card-body">
          <h5 class="card-title">
            <a href="detalle.html?cafe=${encodeURIComponent(cafe.nombre)}" class="text-decoration-none">
              ${cafe.nombre}
            </a>
          </h5>
          <p class="card-text">${cafe.ambiente} · ${cafe.zona}</p>
          <p class="card-text text-muted">⭐ ${cafe.valoracion} (${cafe.reseñas} reseñas)</p>
          <p class="card-text small">${cafe.extras ? cafe.extras.join(", ") : ""}</p>
        </div>
      </div>
    `;
    resultsDiv.appendChild(col);
  });
}
// Cargar todas las cafeterías al iniciar
document.addEventListener("DOMContentLoaded", () => mostrarCafeterias(cafes));

// Filtro desde el formulario principal HERO

document.getElementById("formularioHero").addEventListener("submit", function (e) {
  e.preventDefault();

  const texto = document.getElementById("filtroTexto").value.toLowerCase();
  const ambiente = document.getElementById("filtroAmbiente").value !== "Ambiente" ? document.getElementById("filtroAmbiente").value : "";
  const extra = document.getElementById("filtroExtras").value !== "Extras" ? document.getElementById("filtroExtras").value : "";


  const filtradas = cafes.filter(cafe =>
  (cafe.nombre.toLowerCase().includes(texto) ||
   cafe.zona.toLowerCase().includes(texto)) &&
  (ambiente ? cafe.ambiente === ambiente : true) &&
  (extra ? cafe.extras && cafe.extras.includes(extra) : true)
);

  mostrarCafeterias(filtradas);
});

document.getElementById("busquedaNav").addEventListener("submit", function (e) {
  e.preventDefault();
  const texto = this.querySelector("input").value.toLowerCase();

  const resultado = cafes.filter(cafe =>
    cafe.nombre.toLowerCase().includes(texto) ||
    cafe.zona.toLowerCase().includes(texto)
  );

  mostrarCafeterias(resultado);
});

document.getElementById("busquedaNav").addEventListener("submit", function (e) {
  e.preventDefault();
  const texto = this.querySelector("input").value.toLowerCase();

  const resultado = cafes.filter(cafe =>
    cafe.nombre.toLowerCase().includes(texto) ||
    cafe.zona.toLowerCase().includes(texto)
  );

  mostrarCafeterias(resultado);
});