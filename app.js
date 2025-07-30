 //document.querySelector ( selecciona una parte de HTML para poder agregarle texto con la variable
 // VARIABLE.innerHTML
 
/*
 let parrafo = document.querySelector ("p");

 parrafo.innerHTML = "Indica un numero del 1 al 10"; 

 let numeroSecreto = generarNumeroSecreto () ;
//*/
// operador ternario : ("p",`Acertaste en ${intentos} ${(intentos=== 1) ? "vez" : "veces"}`)
numeroSecreto = 0
intentos = 0
let numeroSorteados = [];
let numeroMaximo = 10



    function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto 
}

    function verificarIntento () { let numeroDeUsuario  = parseInt(document.getElementById ("valorUsuario").value) ;
        
        
            if (numeroDeUsuario === numeroSecreto) {
                asignarTextoElemento ("p",`Acertaste en ${intentos} ${(intentos=== 1) ? "vez" : "veces"}`); 
               document.getElementById ("reiniciar").removeAttribute ("disabled");}
                else {  
                    //el usuario no acerto
                    if ( numeroDeUsuario > numeroSecreto){ asignarTextoElemento ("p", " El numero es menor")
                       } else {asignarTextoElemento ("p", " El numero es mayor")}

                }  intentos++;
                limpiarCaja();
                  return;
                 

    }
    function limpiarCaja (){
       let valorCaja = document.querySelector("#valorUsuario").value = "";
    }
    
    function generarNumeroSecreto () {
         let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
        if (numeroSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se sortearon todos los numeros posibles");
        } else{

         if (numeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
         } else {
            numeroSorteados.push(numeroGenerado); return numeroGenerado;
         }
         }
        
    }

    function CondicionesIniciales (){
    asignarTextoElemento("h1", "Juego del numero secreto!"); 
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
 }

    function reiniciarJuego (){
        //limpiar la caja
        limpiarCaja () ;
        //indicar mensje de intervalo de numeros 
        CondicionesIniciales() ;
        //generar el numero aleatorio
        
        // desabilitar el boton de nuevo juego
             
        //inicializar de intentos

    document.getElementById ("reiniciar").setAttribute ("disabled", "true");
        

    }

    CondicionesIniciales ();

    
