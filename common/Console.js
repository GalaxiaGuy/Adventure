Console = { };

Console.init = function(div)
{
    Console.div = div;
};

Console.debug = function(text)
{
    var p = document.createElement('p');
    p.innerText = text;
    $(p).addClass('debug');
    $(Console.div).prepend(p);
};