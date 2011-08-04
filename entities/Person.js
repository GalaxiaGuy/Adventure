function Person(name)
{
    this.name = name;
}

Person.prototype.speak = function(message)
{
    alert(this.name + ': ' + message);
};

Person.prototype.draw = function(ctx)
{
};

Person.prototype.update = function(elapsed)
{
};

Person.prototype.drawCentered = function(ctx, sprite, x, y)
{
    x -= sprite.width/2;
    y -= sprite.height/2;
    ctx.drawImage(sprite, x, y);
};