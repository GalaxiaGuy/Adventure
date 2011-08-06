function Player(game)
{
    Person.call(this, game);
};

Player.prototype = new Person();
Player.prototype.constructor = Player;