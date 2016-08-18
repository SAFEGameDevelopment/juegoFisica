var Nivel3 = {
preload: function() {

    game.load.image('rectangulo','assets/rectangulo.png');
},
create: function() {

/********************************************************************************/
/*

Esta funcion dibuja objetos en pantalla en el orden en que se añadan

Si un objeto se dibuja primero, quedara como background

La funcion "create" se corre sola despues de preload, asi que no se
preocupen en llamarla

Cuando se crea un objeto se pide la ubicacion en x y y, y el nombre de la
imagen que tendra

En Phaser X y Y el 0,0 está en la esquina superior izquierda y "y" se cuenta
positivo hasta abajo.
*/
/********************************************************************************/


    CrearBasico();
    game.time.events.add(Phaser.Timer.SECOND * 10, ResaltarDudas, this);
    CrearBotonPista("Los vectores tienen magnitud (azul) que\ncambian su tamaño y rapidez.\n¿Qué sucederá si colocas una magnitud \nen el cuadro del mismo color?.\n¡ Inténtalo !");
    CrearSalida(610,484);
    limiteDeTiempo = Infinity;
    vector = CrearVector(400,300,0,0, true);
    posInicXPlayer = 50;
    posInicYPlayer = game.world.height - 110;
    CrearJugador(posInicXPlayer, posInicYPlayer);
    numeroMagnitud = CrearNumeroParaVectorControlable(100,550,300,1);
    numeroMagnitud = CrearNumeroParaVectorControlable(300,650,300,3);
    numeroMagnitud = CrearNumeroParaVectorControlable(500,750,300,5);
    CrearMano(listaDeNumeros[0].x -55 , listaDeNumeros[0].y + 25);
    inicio = listaDeNumeros;
    indice = 0;
    // informacion sobre la magnitud
    //info = "Un vector tiene magnitud, que\n es un valor asociado a una\n propiedad física y que cambia\n la intensidad del mismo";
    //AñadirTexto(60, 60, info, colorTexto, 24);

    tutorial();
    //Variable para controlar el titilar del boton play
    overlap = false;
},

update: function() {
//La función update es la responsable de los "frames"
//Aqui colocamos lo que es movimiento y cambios de variables
//Se llama sola en forma de loop infinito

    ControlJugador();
    ControlarNivel();
    if (!(listaDeNumeros[0] === undefined && listaDeNumeros[0] === undefined)) {
//    console.log("MAYONESA: " + listaDeNumeros)
        AnimarMano(inicio,listaDeVectores[0].cuadro,[-55,25,-40,+60]);
    }

    //Parte del tutorial
    resaltarPlay();
}
};
