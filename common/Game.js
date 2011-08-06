function Game()
{
}

Game.prototype.loop = function()
{
    this.draw(this.ctx);
    this.update(1/60);
};

Game.prototype.init = function(canvas, overlay, imagePrefix)
{
    var that = this;
    this.keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        t: false,
    };
    this.imageManager = new ImageManager(imagePrefix);
    this.ctx = canvas.getContext('2d');
    this.overlay = overlay;
    this.entities = [];
    this.dynamicOverlays = [];
    window.addEventListener('keydown', function(e)
    {
        switch(e.keyCode)
        {
            case 37:
                that.keys.left = true;
                break;
            case 38:
                that.keys.up = true;
                break;
            case 39:
                that.keys.right = true;
                break;
            case 40:
                that.keys.down = true;
                break;
            case 84:
                that.keys.t = true;
                break;
            default:
                Console.debug('Keydown: ' + e.keyCode);
        }
    });
    window.addEventListener('keyup', function(e)
    {
        switch(e.keyCode)
        {
            case 37:
                that.keys.left = false;
                break;
            case 38:
                that.keys.up = false;
                break;
            case 39:
                that.keys.right = false;
                break;
            case 40:
                that.keys.down = false;
                break;
            case 84:
                that.keys.t = false;
                break;
        }
    });
};

Game.prototype.draw = function(ctx)
{
    this.ctx.canvas.width  = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.ctx.fillStyle = 'rgb(0,127,0)';
    this.ctx.fillRect (0, 0, ctx.canvas.width, ctx.canvas.height);    
    this.ctx.save();
    this.ctx.translate(ctx.canvas.width*0.5, ctx.canvas.height*0.5);
    var len = this.entities.length;
    for(var i = 0; i < len; i++)
    {
        this.entities[i].draw(ctx);
    }    
    this.ctx.restore();
};

Game.prototype.update = function(elapsed)
{
    this.imageManager.update();
    var len = this.entities.length;
    for(var i = 0; i < len; i++)
    {
        this.entities[i].update(elapsed);
    }
};

Game.prototype.start = function()
{
    var that = this;
    this.player = new Player();
    this.entities.push(this.player);
    (function gameLoop()
    {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};

Game.prototype.worldMessage = function(text)
{
    var div = document.createElement('div');
    div.innerText = text;
    this.overlay.appendChild(div);
};