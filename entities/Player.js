function Player(game)
{
    Person.call(this, game);
    this.topics = [];
}

Player.prototype = new Person();
Player.prototype.constructor = NPC;