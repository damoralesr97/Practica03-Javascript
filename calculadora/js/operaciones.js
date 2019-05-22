var a
var b
var operacion


function init(){

    var resultado = document.getElementById("resultado")
    var retroceso = document.getElementById("retroceso")
    var ce = document.getElementById("ce")
    var c = document.getElementById("c")
    var masmenos = document.getElementById("masmenos")
    var raiz = document.getElementById("raiz")
    var division = document.getElementById("division")
    var porcentaje = document.getElementById("porcentaje")
    var multiplicacion = document.getElementById("multiplicacion")
    var fraccion = document.getElementById("fraccion")
    var resta = document.getElementById("resta")
    var igual = document.getElementById("igual")
    var coma = document.getElementById("coma")
    var suma = document.getElementById("suma")
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatro = document.getElementById("cuatro")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var cero = document.getElementById("cero")


    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }

    c.onclick = function(e){
        resetear();
    }
    ce.onclick = function(e){
        limpiar();
    }
    retroceso.onclick = function(e){
        resultado.textContent = resultado.textContent.substr(0,resultado.textContent.length-1)
    }
    masmenos.onclick = function(e){
        if (parseFloat(resultado.textContent)>0){
            resultado.textContent = parseFloat(resultado.textContent)*-1
        } else {
            resultado.textContent = parseFloat(resultado.textContent)*-1
        }
    }
    raiz.onclick = function(e){
        resultado.textContent = Math.sqrt(resultado.textContent)
    }
    porcentaje.onclick = function(e){
        resultado.textContent = parseFloat(resultado.textContent)/100
    }
    fraccion.onclick = function(e){
        resultado.textContent = 1/parseFloat(resultado.textContent)
    }
    coma.onclick = function(e){
        resultado.textContent = resultado.textContent+'.'
    }

    suma.onclick = function(e){
        a = resultado.textContent
        operacion = "+"
        limpiar();
    }
    resta.onclick = function(e){
        a = resultado.textContent
        operacion = "-"
        limpiar();
    }
    multiplicacion.onclick = function(e){
        a = resultado.textContent
        operacion = "*"
        limpiar();
    }
    division.onclick = function(e){
        a = resultado.textContent
        operacion = "/"
        limpiar();
    }

    igual.onclick = function(e){
        b = resultado.textContent
        resolver();
    }
}

function limpiar(){
    resultado.textContent = ""
}

function resetear(){
    resultado.textContent = ""
    a=0
    b=0
    operacion=""
}

function resolver(){
    var res = 0
    switch(operacion){
        case "+":
            res = parseFloat(a) + parseFloat(b)
            break
        case "-":
            res = parseFloat(a) - parseFloat(b)
            break
        case "*":
            res = parseFloat(a) * parseFloat(b)
            break
        case "/":
            res = parseFloat(a) / parseFloat(b)
            break
    }
    resetear()
    resultado.textContent = res
}