var Nivel17 = {
	preload : function() {

	},
	create : function() {

		/** ***************************************************************************** */
		/*
		 *
		 * Esta funcion dibuja objetos en pantalla en el orden en que se añadan
		 *
		 * Si un objeto se dibuja primero, quedara como background
		 *
		 * La funcion "create" se corre sola despues de preload, asi que no se
		 * preocupen en llamarla
		 *
		 * Cuando se crea un objeto se pide la ubicacion en x y y, y el nombre
		 * de la imagen que tendra
		 *
		 * En Phaser X y Y el 0,0 está en la esquina superior izquierda y "y" se
		 * cuenta positivo hasta abajo.
		 */
		/** ***************************************************************************** */
		CrearBasico();
		game.time.events.add(Phaser.Timer.SECOND * 10, ResaltarDudas, this);
		limiteDeTiempo = 2;

		botonPistas = CrearBotonPista("Un salto de fé?\nNo, hay algo mas aqui,\ntiempo y distancia...\nque haria el resolvedor?");
		/* Dato Distancia */
		lineaizq = game.add.sprite(300, 455, 'linea');
		lineaizq.scale.setTo(7, 1);
		lineader = game.add.sprite(440, 455, 'linea');
		lineader.scale.setTo(7, 1);
		CrearDato(4, 390, 410, 4, "distancia");

		var posicionPuertaRealX = 510;
		var posicionPuertaRealY = 340;

		CrearSalida(posicionPuertaRealX, posicionPuertaRealY);

		// pared izq

		pared = CrearPared(200, 200);
		pared = CrearPared(200, 100);

		CrearPlataforma(200, 300, 1, 1);
		// CrearPlataforma(300,300,1,1);
		CrearPlataforma(450, 400, 1, 1);
		CrearPlataforma(550, 400, 1, 1);

		// techo
		techo = CrearPared(150, 50);
		techo.angle = 90;

		techo = CrearPared(250, 50);
		techo.angle = 90;

		techo = CrearPared(350, 50);
		techo.angle = 90;

		techo = CrearPared(450, 50);
		techo.angle = 90;

		techo = CrearPared(550, 50);
		techo.angle = 90;

		techo = CrearPared(650, 50);
		techo.angle = 90;

		techo = CrearPared(750, 50);
		techo.angle = 90;

		// pared der
		pared = CrearPared(600, 100);
		pared = CrearPared(600, 200);
		pared = CrearPared(600, 300);

		CrearEspinas(100, 486);
		CrearEspinas(200, 486);
		CrearEspinas(300, 486);
		CrearEspinas(400, 486);
		CrearEspinas(500, 486);
		CrearEspinas(600, 486);
		CrearEspinas(700, 486);
		CrearEspinas(800, 486);
		listaDeEspinas[0][0].angle = 90;
		listaDeEspinas[1][0].angle = 90;
		listaDeEspinas[2][0].angle = 90;
		listaDeEspinas[3][0].angle = 90;
		listaDeEspinas[4][0].angle = 90;
		listaDeEspinas[5][0].angle = 90;
		listaDeEspinas[6][0].angle = 90;
		listaDeEspinas[7][0].angle = 90;

		vector = CrearVector(505, 260, 0, 0, true);

		numeroMagnitud = CrearNumeroParaVectorControlable(400, 360, 330, 4);
		numeroMagnitud = CrearNumeroParaVectorControlable(100, 310, 330, 1);
		numeroMagnitud = CrearNumeroParaVectorControlable(200, 260, 330, 2);

		CrearNube(posicionPuertaRealX - 10, posicionPuertaRealY - 50,
				posicionPuertaRealX + 10, posicionPuertaRealY - 10);
		CrearDato(limiteDeTiempo, posicionPuertaRealX,
				posicionPuertaRealY - 76, limiteDeTiempo, "tiempo");
		posInicXPlayer = 270;
		posInicYPlayer = game.world.height - 360;
        //monologo de Sam
        monologo = AñadirTexto(300,225,"Esta vez será diferente!",colorTexto,20);
        monologo.alpha = 0.01;
        faseBorrado = 0;
        //
		CrearJugador(posInicXPlayer, posInicYPlayer);
		DetenerCancion();
		ReproducirLoopAudio(Stop_And_Think, 0.3);
	},

	update : function() {
		// La función update es la responsable de los "frames"
		// Aqui colocamos lo que es movimiento y cambios de variables
		// Se llama sola en forma de loop infinito

		ControlJugador();
		ControlarNivel();
                BorrarTexto();
		game.debug.bodyInfo(player);
	}
};
