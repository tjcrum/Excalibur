var main = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, backgroundColor : 0x1099bb});
document.body.appendChild(main.view);
main.stage.interactive = true;
main.stage.on('pointerup', nextScreen);
main.stage.buttonMode = true;

var dogList = [new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/org_uploads/2014/06/cute-dog.jpg'),
		new PIXI.Sprite.fromImage('https://4.bp.blogspot.com/-tgliMtjM-UI/WTRbVrD7StI/AAAAAAABxLA/mK_hlUYvR_MFptr-woS_Ig2GOJ2DZvG2gCLcB/s1600/cute-dogs-180-02.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2017/03/hugging-dogs-new-puppy-trek-envy-zain-13.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/04/bulldog-puppy-cute-dog-photography-coverimage.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/09/pekingese-dog-hairstyles-kuma-22.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2016/05/dog-cat-friends-golden-retriever-forsberg-maxwell-fb.png'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2016/08/animals-yoga-poses-7-57bae3cec6ed9__605.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/07/puppy-born-2-legs-half-bulldog-twice-heart-bonsai-15.jpg'),
		new PIXI.Sprite.fromImage('http://static.boredpanda.com/blog/wp-content/uploads/2014/06/cute-dog-pig-virginia-facebook.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5ad0b971c47c5_qD7Lfvo__700.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2017/04/image-58e2c2255dc58__700.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2014/04/cute-animals-sleeping-stuffed-toys-41.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/07/sleeping-puppy-cover-image.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2018/05/pitbull-dog-party-denied-entry-blu-petsmart-texas-5af2a4f20d74b__700.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/02/cute-cats-sleeping-on-dogs-16__700.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2016/10/AlicjaZmysowska-1-3s-5817476d3c457__880.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2016/03/cute-puppy-day-photos-adorable-dogs-60__605.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/05/Close-and-Personal-Portraits-of-Cats-and-Dogs-Part-22__880.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/05/Close-and-Personal-Portraits-of-Cats-and-Dogs-Part-214__880.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/05/Close-and-Personal-Portraits-of-Cats-and-Dogs-Part-221__880.jpg'),
		new PIXI.Sprite.fromImage('http://static.boredpanda.com/blog/wp-content/uploads/2014/08/cute-animals-twins-15.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2018/04/dog-breathing-problems-awareness-pinched-nostrils-cruffa-5ae189ab5a6f3__700.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/org_uploads/2014/07/none1555__700.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2014/08/cute-dogs-hugging-humans-84.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2016/02/dog-hairstyles-instagram-kuma-moem-n-133__605.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2014/04/cute-animals-sleeping-stuffed-toys-17.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2016/01/dog-shiba-inu-sleeps-teddy-bear-same-position-maru-29.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b39c0ea507__880.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2014/03/first-world-anarchists-funny-rebels-7.jpg'),
		new PIXI.Sprite.fromImage('https://static.boredpanda.com/blog/wp-content/uploads/2015/05/funny-dog-animal-video-corgis-running-slow-motion-fb.jpg')];

var dogDisplay = dogList[0];
dogDisplay.anchor.set(0.5);
dogDisplay.x = main.screen.width / 2;
dogDisplay.y = main.screen.height / 2;
dogDisplay.scale.x = 1;
dogDisplay.scale.y = 1;
dogDisplay.alpha = .78;
main.stage.addChild(dogDisplay);

var titleText = new PIXI.Text('Hail Puppers!', style);
titleText.anchor.set(0.5);
titleText.x = main.screen.width / 2;
titleText.y = main.screen.height / 2 - 250;
main.stage.addChild(titleText);
var count = 0;

var timeText = new PIXI.Text(Date(), style2);
timeText.anchor.set(0.0);
timeText.x = 0;
timeText.y = main.screen.height - 18;
main.stage.addChild(timeText);

var mask = new PIXI.Graphics();
mask.drawCircle(0,0, main.screen.width);
dogDisplay.mask = mask;

var dogIndex = 0;

var bgMusic = PIXI.sound.Sound.from('https://raw.githubusercontent.com/tjcrum/Excalibur/master/Gum-Ball-Factory.mp3');
bgMusic.loop = true;
bgMusic.play();

main.ticker.add(function()
{
	timeText.text = Date();
	count += 0.1;
	titleText.rotation = Math.sin(count) / 2;
	titleText.scale.x = Math.max(.75, Math.cos(count)) * 1.15;
	titleText.scale.y = Math.max(.75, Math.cos(count)) * 1.15;

	mask.clear();

	var calc = Math.abs(Math.sin(count/9));
	mask.drawCircle(0,0, main.screen.width * calc);

	if(calc < .01)
	{
		if(dogIndex >= dogList.length)
		{
			dogIndex = 0;
		}
		
		dogDisplay.texture = dogList[dogIndex].texture;
		dogIndex++;
	}
});

function nextScreen()
{
	for(var alpha = 1; alpha < 0; alpha-= .1)
	{
		main.stage.alpha = alpha;
	}
	LoadLoginScreen();
	main.destroy(true);
}