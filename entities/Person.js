function Person(game, name)
{
    Entity.call(this, game);
    this.name = name;
}

Person.prototype = new Entity();
Person.prototype.constructor = Person;

Person.prototype.speak = function(message)
{
    this.game.worldMessage(this.name + ': ' + message);
};

Person.prototype.draw = function(ctx)
{
    ctx.fillStyle = 'rgb(0,0,0)'
    ctx.fillRect(this.x-5, this.y-5, 10, 10);
};

Person.prototype.moveUp = function()
{
    this.y -= 5;
};

Person.prototype.moveDown = function()
{
    this.y += 5;
};

Person.prototype.moveLeft = function()
{
    this.x -= 5;
};

Person.prototype.moveRight = function()
{
    this.x += 5;
};
