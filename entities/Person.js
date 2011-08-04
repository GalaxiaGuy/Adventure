function Person(name)
{
    Entity.call(this);
    this.name = name;
}

Person.prototype = new Entity();
Person.prototype.constructor = Person;

Person.prototype.speak = function(message)
{
    alert(this.name + ': ' + message);
};

