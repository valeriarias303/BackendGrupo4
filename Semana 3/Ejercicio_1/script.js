// Lista para almacenar los estudiantes y sus calificaciones
let estudiantes = [];

// Función para agregar un nuevo estudiante
function agregarEstudiante() {
    let nombre = prompt("Ingresa el nombre del estudiante:");
    let calificacion = parseFloat(prompt("Ingresa la calificación del estudiante:"));
    estudiantes.push({ nombre: nombre, calificacion: calificacion });
    console.log(`Estudiante ${nombre} agregado con calificación ${calificacion}.`);
}

// Función para mostrar la lista de estudiantes con sus calificaciones
function mostrarEstudiantes() {
    console.log("Lista de estudiantes y sus calificaciones:");
    estudiantes.forEach((estudiante, index) => {
        console.log(`${index + 1}. Nombre: ${estudiante.nombre}, Calificación: ${estudiante.calificacion}`);
    });
}

// Función para calcular el promedio de las calificaciones
function calcularPromedio() {
    let suma = estudiantes.reduce((acc, estudiante) => acc + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length;
    console.log(`Promedio de las calificaciones del curso: ${promedio.toFixed(2)}`);
}

// Función para determinar cuántos estudiantes aprobaron y desaprobaron
function contarAprobadosDesaprobados() {
    let aprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 60).length;
    let desaprobados = estudiantes.length - aprobados;
    console.log(`Estudiantes aprobados: ${aprobados}`);
    console.log(`Estudiantes desaprobados: ${desaprobados}`);
}

// Función principal para gestionar el menú de opciones
function gestionarNotas() {
    let opcion;
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Agregar un nuevo estudiante\n" +
            "2. Mostrar lista de estudiantes\n" +
            "3. Calcular el promedio del curso\n" +
            "4. Determinar aprobados y desaprobados\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                agregarEstudiante();
                break;
            case "2":
                mostrarEstudiantes();
                break;
            case "3":
                calcularPromedio();
                break;
            case "4":
                contarAprobadosDesaprobados();
                break;
            case "5":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción inválida, intenta de nuevo.");
        }
    } while (opcion !== "5");
}

// Llamada a la función principal para iniciar el programa
gestionarNotas();
