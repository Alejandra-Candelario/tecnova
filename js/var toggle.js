
document.addEventListener('DOMContentLoaded', function(){

const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('change', function() {
      if (this.checked) {
        // Cambiar a tema claro
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
      } else {
        // Cambiar a tema oscuro
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      }
    });


    // Obtener el elemento section
const section = document.querySelector('section');

// Obtener el color de fondo actual de la sección
const computedStyle = getComputedStyle(section);
const backgroundColor = computedStyle.backgroundColor;

// Convertir el color de fondo a un formato legible
function rgbToHex(rgb) {
  // Separa los componentes RGB
  const [r, g, b] = rgb.match(/\d+/g);
  // Convierte a hexadecimal
  const hex = "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1);
  return hex;
}

// Verificar si el color de fondo es claro u oscuro
function isLight(color) {
  // Convertir el color a hexadecimal
  const hexColor = rgbToHex(color);
  // Obtener los valores RGB
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  // Calcular el brillo
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // Si el brillo es mayor que 125, es un color claro
  return brightness > 125;
}

// Cambiar el color del texto en función del color de fondo
if (isLight(backgroundColor)) {
  // Si el fondo es claro, establecer el color del texto en negro
  section.style.color = "#000";
} else {
  // Si el fondo es oscuro, establecer el color del texto en blanco
  section.style.color = "#fff";
}


});


