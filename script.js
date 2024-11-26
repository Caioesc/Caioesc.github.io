const botaoMenu = document.getElementById("menu-toggle");
const slideMenu = document.getElementById("slide-menu");

botaoMenu.addEventListener("click", () => {
    slideMenu.classList.toggle("open");
});


function botaoDarkMode() {
    const body = document.body;
    const darkModeOn = body.classList.toggle("dark-mode");
    
    localStorage.setItem("darkMode", darkModeOn ? "enabled" : "disabled");
}

document.addEventListener("DOMContentLoaded", () => {
    const modoSalvo = localStorage.getItem("darkMode");
    
    if (modoSalvo === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

function atualizaHora() {
    const dataHora = document.getElementById('date-time');
    const agora = new Date();
    dataHora.textContent = `Data e Hora Atual: ${agora.toLocaleDateString()} ${agora.toLocaleTimeString()}`;
  }
  
  setInterval(atualizaHora, 1000); 
  atualizaHora();
  
