function Player(game)
{
    Person.call(this, game);
    this.topics = [];
}

Player.prototype = new Person();
Player.prototype.constructor = Player;

Player.prototype.checkTalk = function()
{
    var length = Game.game.npcs.length;
    for (var i=0; i<length; i++)
    {
        var npc = Game.game.npcs[i];
        var menu = npc.talkMenu();
    }
};