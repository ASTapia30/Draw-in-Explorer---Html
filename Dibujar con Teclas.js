var teclas = {UP:38, DOWN:40, LEFT:37, RIGHT:39};
var boton_borrar = document.getElementById("borrar");


document.addEventListener("keyup", dibujarTeclado);
boton_borrar.addEventListener("click",borrarPorClick);
var cuadrito = document.getElementById("AREA_DE_DIBUJO");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149,149,151,151,papel)

function dibujarLinea(color, xi, yi, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento)
{   
    var colorcito = "blue";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
    }
}

function borrarPorClick()
{
   papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
   x = 150;
   y = 150;
   dibujarLinea("red", 149,149,151,151,papel)
   
}