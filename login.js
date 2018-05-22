var login = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, backgroundColor : 0x1099bb});

var bgCircle = new PIXI.Graphics();
bgCircle.beginFill(0x05323E);
bgCircle.drawCircle(0,0, login.screen.width / 2);
login.stage.addChild(bgCircle);

var bgCircle2 = new PIXI.Graphics();
bgCircle.beginFill(0x1099bb);
bgCircle.drawCircle(0,0, login.screen.width / 4);
login.stage.addChild(bgCircle);

var usernameText = new PIXI.Text('Enter Username: ', style3);
usernameText.anchor.set(1.0);
usernameText.x = login.screen.width / 2;
usernameText.y = login.screen.height / 2 - 50;
login.stage.addChild(usernameText);

var passwordText = new PIXI.Text('Enter Password: ', style3);
passwordText.anchor.set(1.0);
passwordText.x = login.screen.width / 2;
passwordText.y = login.screen.height / 2 + 50;
login.stage.addChild(passwordText);

var googleGames = new PIXI.Sprite.fromImage('https://image.flaticon.com/teams/slug/google.jpg')
googleGames.height = 60;
googleGames.width = 60;
googleGames.x = login.screen.width / 2 + 120;
googleGames.y = login.screen.height / 2 + 80;
login.stage.addChild(googleGames);

var facebook = new PIXI.Sprite.fromImage('https://www.facebook.com/images/fb_icon_325x325.png')
facebook.height = 60;
facebook.width = 60;
facebook.x = login.screen.width / 2 + 200;
facebook.y = login.screen.height / 2 + 80;
login.stage.addChild(facebook);

var loginButton = new PIXI.Text('Login', style3);
loginButton.anchor.set(1.0);
loginButton.x = login.screen.width / 2;
loginButton.y = login.screen.height / 2 + 150;
loginButton.interactive = true;
loginButton.buttonMode = true;
loginButton.on('click', attemptLogin);
login.stage.addChild(loginButton);

function LoadLoginScreen()
{
	document.body.appendChild(login.view);
}

function attemptLogin()
{
	LoadGameScreen();
	login.destroy(true);
}