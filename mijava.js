function suma(primero, segundo){
    resultado = primero + segundo;
    
    alert(resultado);
    console.log("La suma es: " + resultado);
  }
  
  function resta(primero, segundo){
    resultado = primero - segundo;
    
    console.log("La resta es: " + resultado);
  }
  
  function multiplicacion(primero, segundo){
    resultado = primero * segundo;
    
    console.log("La multiplicación es: " + resultado);
  }
  
  function division(primero, segundo){
    resultado = primero / segundo;
    resto = primero % segundo;
    
    console.log("La división es: " + resultado + " ...y su resto es: " + resto);
  }
  
  var numero1 = 0;
  var numero2 = 0;
  var resultado = 0;
  var resto = 0;
  var opcion = 0;
  
  do{
    console.log("1.- Sumar");
    console.log("2.- Restar");
    console.log("3.- Multiplicar");
    console.log("4.- Dividir");
    console.log("\n\n\n");
    
    opcion = Number(prompt("Introduzca su opción: "));
    
  }while(opcion<0 || opcion>5);8
  
    numero1 = Number(prompt("Introduzca el primer número: "));
    numero2 = Number(prompt("Introduzca el segundo número: "));
  
  switch(opcion){
    case 1:
      suma(numero1, numero2);
      break;
    case 2:
      resta(numero1, numero2);
      break;
    case 3:
      multiplicacion(numero1, numero2);
      break;
    case 4:
      division(numero1, numero2);
      break;
  }
  