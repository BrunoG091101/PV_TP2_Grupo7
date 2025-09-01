alert("Ingrese el codigo a resolver desde el 0 al 4 o bien un signo de pregunta ?");
function problema(){
    let numero;
    const simbolo="?";
    let isTrue;
    do{
    numero=prompt("Ingrese los digitos")
    let codigoResuelto=[];

    for(let i=0; i<numero.length; i++){
        if(numero[i]>4){
            console.log("hay un numero mayor a 4");
            alert("Un numero del codigo es mayor a 4");
            isTrue=true;
            break;
        }else{
            if(numero[i] == simbolo){
                let numero1=parseInt(numero[i-1]);
                let numero2=parseInt(numero[i+1]);
            if(numero[i-1]==null){
                codigoResuelto.push(numero2);
            }else if(numero[i-1] !=null && numero[i+1]==null){
                codigoResuelto.push(numero1);
            }else{
                codigoResuelto.push(numero1+numero2);
            }
        
            }else{
                codigoResuelto.push(numero[i]);
            }
                document.getElementById("textEntrada").innerHTML= "El codigo ingresado es = "+numero;
                document.getElementById("textSalida").innerHTML ="El codigo resuelto es = "+codigoResuelto.join("");
            isTrue=false
        }
        
    }
    }while(isTrue==true);

}
problema();