var titulo;
var borrando = true;
var huellas = [];
var lineas = [];
var arriba = false;
var frames = 0;
var Sam;
var avanzando = true;

var WebFontConfig = {

    google: {
        // Agregar la fuente de google que se quiere usar...
        families: ['Indie Flower', 'Permanent Marker', 'Stardos Stencil']
    }

};

var PantallaDeInicio = {
preload: function() {
    loadPantallaDeInicio();
},
create: function()
{

    CargarRepertorioMusica();
    CargarRepertorioSonido();
    game.add.sprite(0,0,'fondoTitulo');
    lineas.push(game.add.sprite(0,400,'linea'));
    game.add.sprite(0,0,'capaIzq');
    game.add.sprite(615,0,'capaDer');
    titulo = game.add.sprite(100,100,'titulo');
    titulo.scale.setTo(1.5,1.5);
    crearBotonDeInicio(375,500);
    Sam = game.add.sprite(200,400, 'dude');
    Sam.anchor.setTo(0.5,0.5);
    Sam.animations.add('right', [5, 6, 7, 8], 10, true);
    Sam.animations.play('right');
    ReproducirLoopAudio(PaceItUp,0.3);
    CrearSilenciarSonido();
},

update: function()
{
    frames = frames + 1;
    animarTitulo();
    animarHuellas(550,390,550,415);
    animarPersonaje();
    SueloMovil();
}
};
function crearBotonDeInicio(x,y,nivel){

    BotonInicio = game.add.sprite(x, y, 'PlayButton');
    BotonInicio.inputEnabled = true;
    BotonInicio.events.onInputDown.add(empezarJuego, this);
    BotonInicio.events.onInputOver.add(overButton, this);
    BotonInicio.events.onInputOut.add(outButton, this);

}

function empezarJuego(){
    game.state.start('SeleccionDeNivel');
}
function animarTitulo(){
    alfalfa = titulo.alpha
    if (borrando == true){
        if (alfalfa < 0.5){
            borrando = false;
        }
        else{
            titulo.alpha = titulo.alpha - 0.01
        }
    }
    else{
        if (alfalfa > 0.98){
            borrando = true;
        }
        else{
            titulo.alpha = titulo.alpha + 0.01
        }
    }
}

function animarHuellas(upx,upy,downx,downy){
    if (frames > 25){
        if (arriba){
            huellas.push(game.add.sprite(upx,upy,'huellas'));
            arriba = false;
        }
        else{
            huellas.push(game.add.sprite(downx,downy,'huellas'));
            arriba = true;
        }
        frames = 0;
    }
    for (i = 0; i < huellas.length; i++){
        borrar(huellas[i]);
    }
}

function borrar(objeto){
    alfa = objeto.alpha
    posx = objeto.x
    if (alfa > 0.02) {
       objeto.alpha = alfa - 0.01;
       objeto.x = posx - 1;
    }
    else {
       objeto.destroy();
       huellas.shift();
    }
}

function animarPersonaje(){
    posx = Sam.x
    if (avanzando){
        if (posx < 210){
            Sam.x = posx + 0.1
        }
        else if ((posx >= 210)&&(posx < 220)){
            Sam.x = posx + 0.3
        }
        else if ((posx >= 220)&&(posx < 330)){
            Sam.x = posx + 0.5
        }
        else if ((posx >= 330)&&(posx < 340)){
            Sam.x = posx + 0.3
        }
        else if ((posx >= 340)&&(posx < 350)){
            Sam.x = posx + 0.1
        }
        else if (posx >= 350){
            avanzando = false;
        }
    }
    else {
        if (posx < 200){
            avanzando = true;
        }
        else if (posx < 210){
            Sam.x = posx - 0.1
        }
        else if ((posx >= 210)&&(posx < 220)){
            Sam.x = posx - 0.3
        }
        else if ((posx >= 220)&&(posx < 330)){
            Sam.x = posx - 0.5
        }
        else if ((posx >= 330)&&(posx < 340)){
            Sam.x = posx - 0.3
        }
        else if (posx >= 340){
            Sam.x = posx - 0.1
        }

    }
}
function SueloMovil(){
    for (i = 0; i < lineas.length; i++){
        posx = lineas[i].x
        lineas[i].x = posx - 2;
        if (posx < -700){
            lineas[i].destroy();
            lineas[i] = null;
        }
    }
    if (lineas[0] == null){
        lineas[0] = game.add.sprite(lineas[1].x + 800,400,'linea')
        lineas[0].sendToBack();
        lineas[0].moveUp();
        lineas[0].moveUp();
    }
    if (lineas[1] == null){
        lineas[1] = game.add.sprite(lineas[0].x + 800,400,'linea')
        lineas[1].sendToBack();
        lineas[1].moveUp();
        lineas[1].moveUp();
    }

}
