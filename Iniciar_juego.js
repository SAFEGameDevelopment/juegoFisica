var game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

game.state.add('Nivel1', Nivel1);
game.state.add('Nivel2', Nivel2);
game.state.add('Nivel3', Nivel3);
game.state.add('Nivel4', Nivel4);
game.state.add('Nivel5', Nivel5);
game.state.add('Nivel6', Nivel6);
game.state.add('Nivel7', Nivel7);
game.state.add('Nivel8', Nivel8);
game.state.add('Nivel9', Nivel9);
game.state.add('Nivel10', Nivel10);
game.state.add('Nivel11', Nivel11);
game.state.add('Nivel12', Nivel12);
game.state.add('Nivel13', Nivel13);
game.state.add('Nivel14', Nivel14);
game.state.add('Nivel15', Nivel15);
game.state.add('Nivel16', Nivel16);
game.state.add('Nivel17', Nivel17);
game.state.add('Nivel18', Nivel18);
game.state.add('Nivel19', Nivel19);
game.state.add('Nivel20', Nivel20);
game.state.add('Main_game', MainGame);
game.state.add('SeleccionDeNivel', SeleccionDeNivel);
game.state.add('PantallaDeInicio', PantallaDeInicio);
game.state.add('PantallaDeCargado', PantallaDeCargado);
game.state.add('PantallaFinal', PantallaFinal);

game.state.start('PantallaDeCargado');
