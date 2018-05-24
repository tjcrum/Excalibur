var game = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, backgroundColor : 0x05323E});

var bg = new PIXI.Sprite.fromImage('https://vignette.wikia.nocookie.net/phineasandferb/images/1/1a/Phineas_and_Ferb_are_not_in_the_backyard.jpg')
game.stage.addChild(bg);

function LoadGameScreen()
{
	document.body.appendChild(game.view);
}