/* Crear una página que muestre 3 campos (input): Nombre, apellido, libreta universitaria. Crear un
script para obtener cada uno de los elementos input creados, manipular los elementos para obtener su
valor con la propiedad JS value y mostrar los datos con un alert de la siguiente forma: “Los datos
ingresados son: Nombre: María Apellido: Diaz Libreta Universitaria: APU999999 */

function mostrarDatosIngresados() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let libreta = document.getElementById('libreta').value;

    if(nombre != "" && apellido != "" && libreta != "") {
        alert('Los datos ingresados son: Nombre: ' + nombre + ', Apellido: ' + apellido + ', Libreta Univesitaria: ' + libreta);
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('libreta').value = "";
    } else {
        alert('Por favor, ingrese todos los datos!')
    }

    return;
}