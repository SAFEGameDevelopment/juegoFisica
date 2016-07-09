var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('NivelUno', Nivel1);
game.state.add('NivelDos', Nivel2);
game.state.add('Decision', Decision);
game.state.add('Nivel4', Nivel4);
game.state.add('IntroduccionEcuacionCamuflada', IntroduccionEcuacionCamuflada);
game.state.add('IntroduccionAngulo', IntroduccionAngulo);
game.state.add('Main_game', MainGame);
game.state.add('SeleccionDeNivel', SeleccionDeNivel);

game.state.start('SeleccionDeNivel');
