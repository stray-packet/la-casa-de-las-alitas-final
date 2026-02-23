// Seleccionar botones del menú
const menuBotones = document.querySelectorAll(".menu-btn");

// Seleccionar todas las tarjetas
const tarjetas = document.querySelectorAll(".card");

// Función para filtrar
function filtrar(categoria) {
    tarjetas.forEach(card => {
        let cat = card.dataset.category;

        // Mostrar solo las que coincidan
        if (cat === categoria) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Activar menú
menuBotones.forEach(btn => {
    btn.addEventListener("click", () => {

        // Quitar active a todos
        menuBotones.forEach(b => b.classList.remove("active"));

        // Activar este
        btn.classList.add("active");

        // Filtrar por categoría del botón
        let categoria = btn.dataset.filter;
        filtrar(categoria);
    });
});

// ---------- WHATSAPP ----------
const numeroWhatsApp = "51902434636"; 

document.querySelectorAll(".ordenar-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let producto = btn.dataset.producto;
        let mensaje = encodeURIComponent("Hola, quiero ordenar: " + producto);
        window.open(`https://wa.me/${numeroWhatsApp}?text=` + mensaje);
    });
});

// Mostrar Desayuno por defecto
filtrar("desayuno");
``