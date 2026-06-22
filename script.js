const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");
    });
});

document.querySelector(".back-btn").addEventListener("click", () => {
    alert("Volver atrás");
});

document.querySelector(".commission-btn").addEventListener("click", () => {
    alert("Ir a página de comisiones");
});