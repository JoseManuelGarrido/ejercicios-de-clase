



function matematicas (resultado){
    var operacion = prompt("que operacion deseas hacer?");
    var a;
    var b;
    var resultado;
    if (operacion == "suma"){
        a = prompt("introduce un numero");
        b = prompt("introduce un segundo numero");
        resultado =  Number(a) + Number(b);
        console.log(resultado);
    } else if (operacion == "resta") {
        a = prompt("introduce un numero");
        b = prompt("introduce un segundo numero");
         resultado = Number(a) - Number(b);
        console.log(resultado);
    } else if (operacion == "multiplicar"){
        a = prompt("introduce un numero");
        b = prompt("introduce un segundo numero");
        resultado = Number(a) * Number(b);
        console.log(resultado);
    } else if (operacion == "dividir") {
        a = prompt("introduce un numero");
        b = prompt("introduce un segundo numero");
        resultado =Number(a) / Number(b);;
        console.log(resultado);
    } else {
        operacion != ["suma", "resta", "multiplicar", "dividir"];
        resultado = "error, prueba otra vez";
        console.log(resultado);
    }
}

matematicas();