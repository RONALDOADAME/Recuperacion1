document.getElementById('temas').addEventListener('change',temaSeleccionado);

document.getElementById('temas').addEventListener('onmouseover',temaSeleccionado);

document.getElementById('temas').addEventListener('onclick',temaSeleccionado);

function temaSeleccionado(){
    document.getElementById('palabra').value=null;
    document.getElementById('numero').value=null;
    document.getElementById('resultado').innerHTML="resultados!"
    var apartados=document.getElementsByName('article');

    for(var i=0; i<apartados.length; i++) {
        apartados[i].style.display="none"
    }
    var articulo=document.getElementById('temas').value
    document.getElementById(articulo).style.display='block'        

    }
    function mostrarDatos(){
        var palabra=document.getElementById('palabra').value
        var numero=document.getElementById('numero').value
        var nInt=parseInt(numero)
        var nfloat=parseFloat(numero)
        var datos="El dato caracter es " + palabra + "<br> El dato flotante es" + nfloat;
        document.getElementById('resultado').innerHTML=datos
}

function si(n2){
    var Si=document.getElementById('palabra').value

    if(btnSi>18){
        
        "si puede votar"

    }else{
        "no puedes votar"
    }
    
}

/*variables anonimas*/

var uno=function(){
    document.getElementById('resultado').style.backgroundColor="#136226"
    document.getElementById('resultado').style.color="#ffffff"
    document.getElementById('resultado').style.fontSize="30px"
}

var dos=function(){
    document.getElementById('resultado').style.backgroundColor="#8cc6c6"   
}

var tres=function(){
    document.getElementById('resultado').classList.add("otra");  
}

var fotografia=function(nombre){
    document.getElementById('foto').src="img/" + nombre + ".png";
}


function calcular4() {
    var r = document.getElementById ('Radio').value;
    var h = document.getElementById ('Altura').value;
    var p=3.1416;
    var resultado= (p*r**2*h)/3
    document.getElementById('resultado').innerHTML=resultado;
} 



function calcular(){
    var cantidad=parseFloat(document.getElementById('cantidad').value)
    var porcentaje=parseFloat(document.getElementById('porcentaje').value)
    var propina= (cantidad*porcentaje)/100;

    var total = cantidad + propina;

    document.getElementById('resultado2').innerHTML="<p>subtotal: " + cantidad + "</p>" + "<p>Propina: " + propina + "</p>" + "<p>Total: " + total + "</p>";
}


function comprobar(){
    let x=document.getElementById('uno').value
    let y=document.getElementById('dos').value
    let z=document.getElementById('tres').value

    resultado=Math.max(x, y, z);

    document.getElementById('resultado').innerHTML="El numero mayor es " + resultado;
}

function calcular2(){
    var estado=parseFloat(document.getElementById('estado').value)
    var monto=parseFloat(document.getElementById('monto').value)
  

switch(estado){
    case 1: 
    descuento=(10*monto)/100;
    total=monto-descuento;
    break;

    case 2: 
    descuento=(15*monto)/100;
    total=monto-descuento;
    break;

    case 3: 
    descuento=(20*monto)/100;
    total=monto-descuento;
    break;

    default:
        ("No hay descuentos");
}

document.getElementById('resultado').innerHTML= "El descuento es de: " + descuento;
document.getElementById('resultado1').innerHTML= "El total a pagar es: " + total;

}




   




