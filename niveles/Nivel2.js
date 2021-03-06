var Nivel2 = {
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
    botonPistas = CrearBotonPista("¿Izquierda o derecha?");
    CrearSalida(100,479);
    salidaAbierta = false;
    limiteDeTiempo = Infinity;
    vectorDer = CrearVector(450,300,300,0, false);
    vectorIzq = CrearVector(350,300,300,180);
    posInicXPlayer = 400;
    posInicYPlayer = game.world.height - 110;
    CrearJugador(posInicXPlayer, posInicYPlayer);
    CrearEspinas(600,440);
    pared = CrearPared(650,440);
    //monologo de Sam
    monologo = AñadirTexto(270,450,"Recuerdo mi nombre. Soy Sam.",colorTexto,20);
    monologo.alpha = 0.01; 
    faseBorrado = 0;
    //
    tutorial();
    //Variable para controlar el titilar del boton play
    overlap = false;
    DetenerCancion();
    ReproducirLoopAudio(Stop_And_Think,0.3);

},

update: function() {
//La función update es la responsable de los "frames"
//Aqui colocamos lo que es movimiento y cambios de variables
//Se llama sola en forma de loop infinito

    ControlJugador();
    ControlarNivel();
    BorrarTexto();
    //Parte del tutorial
    resaltarPlay();
}
};

function tutorial2(){
    //titilar vector derecha
    titilarVectorDer = resaltarSprite(350,300, 1.5, 0.8, 'rectangulo');
    vectorDer.events.onInputDown.addOnce(function(vectorDer){pararTitilar(titilarVectorDer, evento);}, this);
    vectorDer.events.onInputDown.addOnce(function(vectorIzq){pararTitilar(titilarVectorIzq, evento);}, this);
    vectorDer.events.onDragStart.addOnce(resaltarPlayerTutorial, this);

    //titilar vector izquierda
    titilarVectorIzq = resaltarSprite(450,300, 1.5, 0.8, 'rectangulo');
    vectorIzq.events.onInputDown.addOnce(function(vectorIzq){pararTitilar(titilarVectorIzq, evento);}, this);
    vectorIzq.events.onInputDown.addOnce(function(vectorDer){pararTitilar(titilarVectorDer, evento);}, this);
    vectorIzq.events.onDragStart.addOnce(resaltarPlayerTutorial, this);
}

function resaltarPlayerTutorial(objeto) {
    titilarPlayer = resaltarSprite(posInicXPlayer+15, posInicYPlayer+23, 1.2, 1.2, 'rectangulo');
}
