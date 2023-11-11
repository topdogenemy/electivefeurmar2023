//create a new scene
let gameScene = new Phaser.Scene("Game");

// load assets
gameScene.preload = function()
{
    this.load.image('mainBackground', 'assets/mainBackground.png');
    this.load.image('menuButton', 'assets/menuButton.png');
    this.load.image('signinButton', 'assets/signinButton.png');
    this.load.image('startButton', 'assets/startButton.png');
    this.load.image('welcomeBackground', 'assets/welcomeBackground.png');
};

// called after the preload ends
gameScene.create = function()
{
    let bg = this.add.sprite(0, -0, 'mainBackground');

    // set origin to effectively

    bg.setOrigin(0, 0);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW,gameH);
    console.log(bg);

};


// set configuration of the game
let config =
    {
        type: Phaser.AUTO, // WebGL or Canvas API
        width: 640,
        height: 360,
        scene: gameScene
    };

// create a new game, pass the configuration
let game = new Phaser.Game(config);
