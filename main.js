//unimos con html
let mostrarPcSeleccion= document.getElementById("pc");
let mostrarHumanoSeleccion= document.getElementById("humano");
const bloquearElecciones=document.querySelector(".eleccion")


//declarando variables 
let resultadoJuego;
let PuntosDelJugador=0;
let PuntosDelPc=0;
let img=true;


//funcion principal
function jugar (obj) {
    var res;

    //Elecciones 
    var objetos=["Papel", "Tijeras", "Piedra"]; 
    var pc=Math.floor(Math.random()*3); 

    //variables de eleccion humano y pc
    movhum=objetos[obj];  
    movpc=objetos[pc];

    console.log(objetos[obj]);
    console.log(objetos[pc]);

    //para mostrar la eleccion en la pagina 
    document.getElementById("humano").innerHTML=`Seleccionaste: ${movhum}  `;
    document.getElementById("pc").innerHTML=`Pc selecciono: ${movpc}  `;


    //en caso de que el pc y tu elijan lo mismo
    if(movhum===movpc){
        resultadoJuego="Empate"
        document.getElementById("resultado-del-juego").innerHTML=`Resultado:${resultadoJuego}  `;

        //caso en el que tu ganas
    }else if( (movhum === 'Papel' && movpc === 'Piedra') ||
    (movhum === 'Tijeras' && movpc === 'Papel') ||
    (movhum === 'Piedra' && movpc === 'Tijeras')){
    PuntosDelJugador++;
    resultadoJuego="Ganaste"
    document.getElementById("resultado-del-juego").innerHTML=`Resultado:${resultadoJuego}  `;
    document.getElementById("player").innerHTML=`Puntos del jugador:${PuntosDelJugador}  `;
    
    
    //caso en el que tu pierdes 
    }else{
        PuntosDelPc++;
        resultadoJuego="Perdiste"
        document.getElementById("resultado-del-juego").innerHTML=`Resultado:${resultadoJuego}  `;
        document.getElementById("pc1").innerHTML=`Puntos del pc:${PuntosDelPc}  `;
    }

    if (PuntosDelJugador == 5 || PuntosDelPc== 5) {
        checkWinner()
        ocultarOpciones()
     }
    
}

let data_hide = document.querySelectorAll('eleccion');
data_hide.forEach(function(element) {
  if (element.textContent === '') {
    element.previousElementSibling.style.display = 'none';
    element.style.display = 'none';
  }
});



//funcion para definir el ganador 
function checkWinner() {
    if(PuntosDelJugador==5){
        resultadoJuego="Ganastee!!-Eres un Crack!!"
        document.getElementById("resultado-del-juego").innerHTML=`Resultado:${resultadoJuego}  `;
        
    }else{
        resultadoJuego="Perediste!!-La maquina es mejor que tu"
        document.getElementById("resultado-del-juego").innerHTML=`Resultado:${resultadoJuego}  `;
    }
}

//ocultamos las opciones una vez se defina el ganador 
function ocultarOpciones(){
  
    let tijeras=document.getElementById("tijeras");
    let Piedra=document.getElementById("piedra");
    let Papel=document.getElementById("papel");
    tijeras.style.opacity=0;
    Papel.style.opacity=0;
    Piedra.style.opacity=0;
    
}


//para recargar la pagina con el boton
window.onload = () =>{
    setTimeout(() =>{
        document.getElementsByTagName("body")
    });

}

function recargarPagina(){
    location.reload();
}

