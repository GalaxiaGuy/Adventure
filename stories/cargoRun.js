Stories = {};
Stories.cargoRun = function()
{
    var w = {};
    var mission = { 
        id: 'deliver',
        scenes: []
    };
    
    mission.generate = function()
    {
        w.cargoOwner = NPC.create('Cargo owner');    
        w.cargoOwner.addTopic('Cargo run', function()
        {
            w.cargoOwner.speak('Hello');
        });
    };
    
    var scene = {
        id: 'start',
        action: function() {  }
    };
    
    mission.scenes.push(scene);
    
    return mission;
}();