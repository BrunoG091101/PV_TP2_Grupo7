alert("Ingrese el codigo a resolver desde el 0 al 4 o bien un signo de pregunta ?");
function problema(){
    let numero=prompt("Ingrese los digitos");
    const codigoResuelto=[];
    for(let i=0; i<numero.length; i++){
    if(numero[i]=="?"){
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
    }
    document.getElementById("textEntrada").innerHTML= "El codigo ingresado es = "+numero;
    document.getElementById("textSalida").innerHTML ="El codigo resuelto es = "+codigoResuelto.join(" ");
}
problema();