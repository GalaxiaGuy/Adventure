function Adventure()
{
    Game.call(this);
    Game.game = this;
    this.npcs = [];
}

Adventure.prototype = new Game();
Adventure.prototype.constructor = Adventure;

Adventure.prototype.init = function(canvas, overlay)
{
    Game.prototype.init.call(this, canvas, overlay, 'http://dl.dropbox.com/u/1033399/HTML5/Gravitas/Images/');
    
    var that = this;

    this.start();
    
    Stories.cargoRun.generate();
    Stories.cargoRun.scenes[0].action();    
};

Adventure.prototype.draw = function(ctx)
{
    Game.prototype.draw.call(this, ctx);
};

Adventure.prototype.update = function(elapsed)
{
    if (this.keys.up)
    {
        this.player.moveUp();
    }
    else if (this.keys.down)
    {
        this.player.moveDown();
    }
    else if (this.keys.left)
    {
        this.player.moveLeft();
    }
    else if (this.keys.right)
    {
        this.player.moveRight();
    }
    
    if (this.keys.t)
    {
        this.player.checkTalk();
    }
    Game.prototype.update.call(this,elapsed);
};