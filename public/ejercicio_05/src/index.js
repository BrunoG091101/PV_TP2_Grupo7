/*Realizar un simulador de salario mensual. El usuario debe ingresar su nombre, la cantidad de horas trabajadas al mes, el pago por hora y al hacer clic en un botón se debe calcular el pago total. 
Se debe tener en cuenta que si la cantidad de horas trabajadas es mayor a 160 se debe pagar un bono adicional del 20%. 

Se debe respetar la estructura de carpetas de archivos visto en clases. Los colores de la pagina quedan a criterio del grupo */

function calcularPago(){
    let nombre = document.getElementById('nombre').value
    let horasAlMes = document.getElementById('horasTrabajadas').value
    let pagoPorHora = document.getElementById('pagoPorHora').value
    let sueldo = 0

    if(horasAlMes > 160){
        sueldo = pagoPorHora * horasAlMes
        sueldo += (sueldo * 0.2)
    }else{
        sueldo = pagoPorHora * horasAlMes
    }
    document.getElementById('pagoMensual').innerHTML = `Hola ${nombre}, tu pago mensual es de $${sueldo} pesos`
    return;
}