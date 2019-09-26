let x = prompt("Zadej pozici X");
let y = prompt("Zadej pozici Y");
let r = Math.sqrt(x * x + y * y);

if(r > 5)
    document.write('<span id="jedna"> Bod [' + x + ',' + y + '] neni v dostrelu veze </span>');
else 
    document.write('<span id="dva">Bod [' + x + ',' + y + '] je v dostrelu veze </span>');