function validarCedula(){
    var bandera =false;
    var cedula = document.getElementById("cedula").value.trim()
    var cedulaVerificar = ""
    var total = 0
    for(var i=0; i<=cedula.length;i++){
        if(cedula.charCodeAt(i) < 48 || cedula.charCodeAt(i) > 57){
            alert('Ingrese solo numeros')
            return document.getElementById("cedula").value = cedula.substring(0,cedula.length-1)   
        }
    }
    if(cedula.length==10){
        cedulaVerificar=cedula
        cedulaV(cedulaVerificar)
    }

    function cedulaV(cedulaVerificar){
        if(Number(cedulaVerificar.substring(0,2))>24){
            alert("Ingrese una cedula valida")
            return document.getElementById("cedula").value = ""
        }
        if(Number(cedulaVerificar.charAt(2)>5)){
            alert("Ingrese una cedula valida")
            return document.getElementById("cedula").value = ""
        }
        
        for(var j=0; j<=8;j++){
            if(j%2==0){
                
                var temp = Number(cedulaVerificar.charAt(j))*2
                if(temp>=10){
                    temp = Number(temp)-9
                    total = Number(total)+Number(temp)
                    temp = 0
                    
                }else{
                    total = Number(total)+Number(temp)
                }
            }else{
                total = Number(total)+Number(cedulaVerificar.charAt(j))
                
            }
        }
        for(var k=10;k<100;k=k+10){
            if(k>Number(total)){
                total= k-Number(total)
                break
            }
        }
        if(Number(cedulaVerificar.charAt(cedulaVerificar.length-1)!=total)){
            alert("Cedula no valida")
            return document.getElementById("cedula").value = ""
        }
    }
    

}

function validarNombres(){
    
    var nombres = document.getElementById("nombres").value.toUpperCase().trim()
    for(var i=0; i<=nombres.length;i++){
        if((nombres.charCodeAt(i) < 65 || nombres.charCodeAt(i) > 90) && nombres.charCodeAt(i) != 32 ){
            alert('Ingrese solo letras')
            return document.getElementById("nombres").value = nombres.toLowerCase().substring(0,nombres.length-1)   
        }
    }
}

function validarApellidos(){
    var apellidos = document.getElementById("apellidos").value.toUpperCase().trim()
    for(var i=0; i<=apellidos.length;i++){
        if((apellidos.charCodeAt(i) < 65 || apellidos.charCodeAt(i) > 90) && apellidos.charCodeAt(i) != 32 ){
            alert('Ingrese solo letras')
            return document.getElementById("apellidos").value = apellidos.toLowerCase().substring(0,apellidos.length-1)   
        }
    }
}

function validarTelefono(){
    var telefono = document.getElementById("telefono").value.trim()
    for(var i=0; i<=telefono.length;i++){
        if(telefono.charCodeAt(i) < 48 || telefono.charCodeAt(i) > 57){
            alert('Ingrese solo numeros')
            return document.getElementById("telefono").value = telefono.substring(0,telefono.length-1)   
        }
    }
}

function validar(){
    var cantidad=0;
    var cedula = document.getElementById("cedula").value.trim()
    var nombres = document.getElementById("nombres").value.trim()
    var apellidos = document.getElementById("apellidos").value.trim()
    var direccion = document.getElementById("direccion").value.trim()
    var telefono = document.getElementById("telefono").value.trim()
    var fec_nac = document.getElementById("fec_nac").value.trim()
    var correo = document.getElementById("correo").value.trim()

        var bandera = false;
        for(var i = 0; i < document.forms[0].length; i++){
            var elemento = document.forms[0].elements[i]
            if(elemento.value.trim() == ''){
                bandera = true
                if(elemento.id == 'cedula'){
                    elemento.style.border = '5px red solid'
                    document.getElementById('mensajeCedula').innerHTML = "La cedula es obligatoria."
                }
                if(elemento.id == 'nombres'){
                    elemento.style.border = '5px red solid'
                    document.getElementById('mensajeNombres').innerHTML = "Los nombres son obligatorios."
                }
                if(elemento.id == 'apellidos'){
                    elemento.style.border = '5px red solid'
                    document.getElementById('mensajeApellidos').innerHTML = "Los apellidos son obligatorios."
                }
                if(elemento.id == 'direccion'){
                    elemento.style.border = '5px red solid'
                    document.getElementById('mensajeDireccion').innerHTML = "La direccion es obligatoria."
                }
                if(elemento.id == 'telefono'){
                    elemento.style.border = '5px red solid'
                    document.getElementById('mensajeTelefono').innerHTML = "El telefono es obligatorio."
                }
                if(elemento.id == 'fec_nac'){
                    elemento.style.border = '5px red solid'
                    document.getElementById('mensajeFec_nac').innerHTML = "La fecha de nacimiento es obligatoria."
                }
                if(elemento.id == 'correo'){
                    elemento.style.border = '5px red solid'
                    document.getElementById('mensajeCorreo').innerHTML = "El correo electronico es obligatorio."
                }
                
            }
        }
        if(bandera){
            alert('Llenar todos los campos')
            return false
        } else {
            if(comprobar()==true){
                return true
            }else{
                return false
            }
        }


    
    
    function comprobar(){
        for(var j=0; j<=nombres.length-1;j++){
            if(nombres.charCodeAt(j) == 32){
                cantidad=Number(cantidad)+1
            }
        }
        if(Number(cantidad)<1){
            document.getElementById('mensajeNombres').innerHTML = "Ingrese dos nombres."
            return false
        }
        cantidad=0;
        for(var j=0; j<=apellidos.length-1;j++){
            if(apellidos.charCodeAt(j) == 32){
                cantidad=Number(cantidad)+1
            }
        }
        if(Number(cantidad)<1){
            document.getElementById('mensajeApellidos').innerHTML = "Ingrese dos apellidos."
            return false
        }
        cantidad=0;
        for(var j=0; j<=fec_nac.length-1;j++){
            if(fec_nac.charCodeAt(j) == 47){
                cantidad=Number(cantidad)+1
            }
        }
        if(Number(cantidad)!=2){
            document.getElementById('mensajeFec_nac').innerHTML = "Ingrese su fecha de nacimiento correctamente dd/mm/yyyy."
            return false
        }else{
            var arrayFecha = fec_nac.split("/")
            if(Number(arrayFecha[0]) < 0 || Number(arrayFecha[0]) > 31){
                document.getElementById('mensajeFec_nac').innerHTML = "Ingrese su fecha de nacimiento correctamente dd/mm/yyyy."
                return false
            }else if(Number(arrayFecha[1]) < 1 || Number(arrayFecha[1]) > 12){
                document.getElementById('mensajeFec_nac').innerHTML = "Ingrese su fecha de nacimiento correctamente dd/mm/yyyy."
                return false
            }else if(Number(arrayFecha[2]) < 1 || Number(arrayFecha[2]) > 2019){
                document.getElementById('mensajeFec_nac').innerHTML = "Ingrese su fecha de nacimiento correctamente dd/mm/yyyy."
                return false
            }
        }
        cantidad=0;
        for(var j=0; j<=correo.length-1;j++){
            if(correo.charCodeAt(j) == 64){
                cantidad=Number(cantidad)+1
            }
        }
        if(Number(cantidad)!=1){
            document.getElementById('mensajeCorreo').innerHTML = "Ingrese su correo electronico correctamente."
            return false
        }else{
            var emailComp = correo.split("@")
            if(emailComp[0].length < 3){
                document.getElementById('mensajeCorreo').innerHTML = "Ingrese su correo electronico correctamente."
                return false
            }else{
                for(var i = 0;i<emailComp[0].length;i++){
                    if((emailComp[0].toUpperCase().charCodeAt(i) < 65 || emailComp[0].toUpperCase().charCodeAt(i) > 90) && (emailComp[0].charCodeAt(i) < 48 || telefono.charCodeAt(i) > 57)){
                        document.getElementById('mensajeCorreo').innerHTML = "Ingrese su correo electronico correctamente."
                        return false
                    }else if(emailComp[1].toLowerCase().trim() != 'est.ups.edu.ec' && emailComp[1].toLowerCase().trim() !='ups.edu.ec'){
                        document.getElementById('mensajeCorreo').innerHTML = "Ingrese un correo electronico institucional."
                        return false
                    }
                }

            }
            
        }
        return true

    }

    
}