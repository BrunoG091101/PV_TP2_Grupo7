/*Declarar una función con nombre calcularMayor() y pasarle como parámetros (numero1, numero2).
Dentro de la función mostrar un alert que diga cuál de los números ingresados es mayor. En caso de ser
iguales, tendrá que indicarlo a través de un alert también. Invocar la función y enviar los argumentos
con diferentes números para probar.*/
function calcularMayor() {
      let numero1 = Number(document.getElementById("Num1").value);
      let numero2 = Number(document.getElementById("Num2").value);

      if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa ambos números.");

       } else if (numero1 > numero2) {
        alert("El número mayor es: " + numero1);

       } else if (numero2 > numero1) {
        alert("El número mayor es: " + numero2);
        
       } else {
        alert("Ambos números son iguales");
        
      }
    }