        
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('space', 'img/thalion-rain.png');
    game.load.image('ball', 'img/bubble256.png');
}

var bg;

function create() {
    // 背景用tileSprite
    var texts = ['三','生','三','世','十','里','桃','花','🌹'];
    bg = game.add.tileSprite(0, 0, 800, 600, 'space');
    bg.autoScroll(0,10);
    var delay = 0;
    for (var i = 0; i < 40; i++) {
        var sprite = game.add.sprite(-100 + (game.world.randomX), 600, 'ball');
        // 0.1~0.6随机数
        sprite.scale.set(game.rnd.realInRange(0.1, 0.6));
        // 4000到6000随机数
        var speed = game.rnd.between(4000, 6000);
        // tween
        console.log('sprite x ='+sprite.x);
        console.log('sprite y = '+sprite.y);
        console.log('sprite width = '+sprite.width);
        console.log('sprite height = '+sprite.height);
        console.log('sprite centerX = '+sprite.centerX);
        console.log('sprite centerY = '+sprite.centerY);
        
   		var text = game.add.text(sprite.centerX-sprite.x,sprite.centerY-sprite.y,texts[i%9],{
        	fill:'#000000',
        	fontSize:'100px'
        });
        sprite.addChild(text);
        
        game.add.tween(sprite).to({ y: -256 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);
        delay += 200;

    }
}

function update() {
    // 让背景移动
    
}