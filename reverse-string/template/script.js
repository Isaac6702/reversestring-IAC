/*  script.js
 *  Invierte el contenido del campo de texto cuando el usuario
 *  hace clic en el botón “Invertir”.
 */

document.addEventListener("DOMContentLoaded", () => {
    const input   = document.getElementById("cadena");
    const button  = document.getElementById("invertir");
    const output  = document.getElementById("resultado");

    button.addEventListener("click", () => {
        const original = input.value;

        // Invertir la cadena: dividimos en caracteres, invertimos el array y volvemos a unir
        const invertida = original.split("").reverse().join("");

        output.textContent = invertida || "—";  // Muestra un guion cuando no hay texto
    });

    // Opcional: invierte en tiempo real al escribir
    // input.addEventListener("input", () => button.click());
});
