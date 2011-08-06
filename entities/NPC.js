function NPC(game)
{
    Person.call(this, game);
    this.topics = [];
}

NPC.prototype = new Person();
NPC.prototype.constructor = NPC;

NPC.prototype.addTopic = function(name, action)
{
    var topic = {
        name: name,
        action: action
    };
    this.topics.push(topic);
};

NPC.prototype.talkMenu = function()
{
    var menu = new Menu();
    var length = this.topics.length;
    for (var i=0; i<length; i++)
    {
        menu.addItem(this.topics[i].name, this.topics[i].action );        
    }
}

NPC.create = function(name)
{
    var npc = new NPC(Game.game, name);
    var x = Math.random()*200;
    var y = Math.random()*200;
    npc.x = x-100;
    npc.y = y-100;
    Game.game.entities.push(npc);
    Game.game.npcs.push(npc);
    return npc;
};

