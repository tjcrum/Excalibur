var app = new PIXI.Application({ width: 800, height: 600, backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

var circle = new PIXI.Graphics();
circle.beginFill(0x5cafe2);
circle.drawCircle(0,0,120);
circle.x = 140;
circle.y = 180;
app.stage.addChild(circle);

var dog1 = new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/org_uploads/2014/06/cute-dog.jpg');
dog1.x = -20;
dog1.y = -20;
dog1.scale.x = .5;
dog1.scale.y = .5;
app.stage.addChild(dog1);
dog1.mask = circle;

var circle = new PIXI.Graphics();
circle.beginFill(0x5cafe2);
circle.drawCircle(0,0,120);
circle.x = 800 - 140;
circle.y = 600 - 180;
app.stage.addChild(circle);

var dog2 = new PIXI.Sprite.fromImage('https://4.bp.blogspot.com/-tgliMtjM-UI/WTRbVrD7StI/AAAAAAABxLA/mK_hlUYvR_MFptr-woS_Ig2GOJ2DZvG2gCLcB/s1600/cute-dogs-180-02.jpg');
dog2.x = 800 - 420;
dog2.y = 600 - 425;
dog2.scale.x = .5;
dog2.scale.y = .5;
app.stage.addChild(dog2);
dog2.mask = circle;

var text = new PIXI.Text('Hail Puppers!');
text.x = 320;
text.y = 180;
app.stage.addChild(text);