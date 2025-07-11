// Obtenemos el input donde se muestra la operación y el resultado
let display = document.getElementById("display");

// Esta función agrega el valor del botón presionado al display
function append(value) {
  display.value += value; // Concatenamos el valor al contenido actual
}

// Esta función limpia el display (como si presionaras "C")
function clearDisplay() {
  display.value = ""; // Lo dejamos vacío
}

// Esta función evalúa la operación escrita en el display
function calculate() {
  try {
    // Usamos eval para calcular la expresión matemática
    display.value = eval(display.value);
  } catch {
    // Si hay un error (por ejemplo, una operación mal escrita), mostramos "Error"
    display.value = "Error";
  }
}