cargoRun = function()
{
    var w = {};
    var mission = { 
        id: 'deliver',
        scenes: []
    };
    
    mission.generate = function() {
        w.cargoOwner = new Person('Cargo owner');    
    };
    
    var scene = {
        id: 'start',
        action: function() { w.cargoOwner.speak('Hello'); }
    };
    
    mission.scenes.push(scene);
    
    return mission;
}();