function Adventure()
{
    Game.call(this);
}

Adventure.prototype = new Game();
Adventure.prototype.constructor = Adventure;

Adventure.prototype.init = function(canvas)
{
    Game.prototype.init.call(this, canvas, 'http://dl.dropbox.com/u/1033399/HTML5/Gravitas/Images/');
    
    var that = this;

    this.start();
};

Adventure.prototype.draw = function(ctx)
{
    this.ctx.canvas.width  = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.ctx.fillStyle = 'rgb(0,127,0)';
    this.ctx.fillRect (0, 0, ctx.canvas.width, ctx.canvas.height);    
    this.ctx.save();
    this.ctx.translate(ctx.canvas.width*0.5, ctx.canvas.height*0.5);
    
    this.ctx.restore();
};

Adventure.prototype.update = function(elapsed)
{
    this.testShip.update(elapsed);
    Game.prototype.update.call(this,elapsed);
};