var miBoton = document.getElementById("miboton");

miBoton.addEventListener('click', function(){
    var campoTexto = document.getElementById("campo-tarea").value;
    var selectLista = document.getElementById("milista").value;
    console.log(campoTexto);
    
    const chequeo = document.createElement("input");
    chequeo.type = "checkbox";
    chequeo.id = "cubo-chequeo";
    chequeo.checked = true;

    const divchequeo = document.createElement("div");
    divchequeo.id = "contenedor-chequeo";
    divchequeo.appendChild(chequeo);

    const tareas = document.createElement("p");
    tareas.id = "primer-parrafo";
    tareas.textContent = campoTexto;

    const consola = document.createElement("p");
    consola.textContent = selectLista;

    const segundoDiv = document.createElement("div");
    segundoDiv.id = "contenedor-interior";
    segundoDiv.insertAdjacentElement("afterbegin", tareas);
    segundoDiv.insertAdjacentElement("afterbegin", consola);

    const primerDiv = document.createElement("div");
    primerDiv.id = "contenedor";
    primerDiv.insertAdjacentElement("afterbegin", segundoDiv);
    primerDiv.insertAdjacentElement("afterbegin", divchequeo);

    // const etiqueta = document.createElement("label");
    // etiqueta.id = "miEtiqueta";
    // etiqueta.textContent = campoTexto;

    document.body.appendChild(primerDiv);
});