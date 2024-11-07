function esPalindromo() {
    // Solicita al usuario que ingrese el texto
    let texto = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");
    
    // Definición de variables
    let textoLimpio = '';
    let esPalindromo = true;
    let start = 0;
    let end;

    try {
        // Limpieza del texto: minúsculas y solo caracteres alfanuméricos
        textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
        end = textoLimpio.length - 1;

        // Uso de un bucle `while` para verificar si el texto es un palíndromo
        while (start < end) {
            if (textoLimpio[start] !== textoLimpio[end]) {
                esPalindromo = false;
                break; // Salir del bucle si se detecta una diferencia
            }
            start++;
            end--;
        }

        // Retorno con operador ternario para decidir el resultado final
        return esPalindromo ? true : false;
    } catch (error) {
        console.error("Error en la función esPalindromo:", error);
        return false;
    } finally {
        console.log("Ejecución de la función esPalindromo completada.");
    }
}

// Llamada a la función y muestra el resultado
let resultado = esPalindromo();
console.log(`¿Es un palíndromo? ${resultado}`);
