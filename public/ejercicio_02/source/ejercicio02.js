alert("Ingrese tres numeros enteros");
function promedio(){
    let numero1 = prompt("ingrese el primer numero entero");
    let numero2 = prompt("ingrese el segundo numero entero");
    let numero3 =prompt("ingrese el tercer numero entero");
    let resultado ;
    resultado=(parseInt(numero1)+parseInt(numero2)+parseInt(numero3))/3;
    console.log(resultado);
    alert("El promedio es " + resultado);
    document.getElementById("resultado").innerHTML="El promedio es "+ resultado;
}  

promedio();