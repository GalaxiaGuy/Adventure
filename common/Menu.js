function Menu()
{
    this.div = document.createElement('div');
    $(this.div).addClass('menu');
    $('#overlay').append(this.div);
    this.ol = document.createElement('ol');
    $(this.div).append(this.ol);
}

Menu.prototype.addItem = function(text, action)
{
    var li = document.createElement('li');
    li.innerText = text;
    $(this.ol).append(li);
};