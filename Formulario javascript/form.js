window.onload = function() {
    alert("quilloooooooooo!!");

    var formulario = document.getElementById('formulario');

    function enviar(objeto){
        alert("conectamos con la base de datos");
        alert(objeto);
        return enviarInformacionApi();
    }

    formulario.onsubmit = (evento) =>{
        //alert("pabernos matáo!!");

        evento.preventDefault();

        var nombre = document.getElementById('miNombre');
        var edad = document.getElementById('miEdad');

        var usuario = {"nombre": miNombre.value, "edad": miEdad.value};

        enviar(usuario);
    }
}