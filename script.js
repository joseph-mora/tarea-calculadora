const realizarOperacion = (num1, num2, operacion) => {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num2 === 0 ? "No es posible realizar una división por cero" : num1 / num2;
        default:
            return "Esta operación no es válida";
    }
};

function iniciarCalculadora() {
    let continuar = true;
    while (continuar) {
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):").toLowerCase();

        alert(`El resultado es: ${realizarOperacion(num1, num2, operacion)}`);

        let respuesta = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();
        if (respuesta !== "si") {
            continuar = false;
            alert("Gracias por usar la calculadora. ¡Adiós!");
        }
    }
}