cargoRun = function()
{
    var w = { };
    var mission = { 
        id: 'deliver',
        scenes: []
    };
    
    w.cargoOwner = new Person('Cargo owner');    
    
    var scene = {
        id: 'start',
        action: w.cargoOwner.speak('Hello')
    };
    
    mission.scenes.push(scene);
    
    return mission;
}();