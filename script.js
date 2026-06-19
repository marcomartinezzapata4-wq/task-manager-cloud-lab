let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

mostrarTareas();

function agregarTarea() {

    const input = document.getElementById("tareaInput");
    const texto = input.value.trim();

    if(texto === ""){
        alert("Ingrese una tarea");
        return;
    }

    tareas.push(texto);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    input.value = "";

    mostrarTareas();
}

function mostrarTareas(){

    const lista = document.getElementById("listaTareas");

    lista.innerHTML = "";

    tareas.forEach((tarea, index) => {

        lista.innerHTML += `
            <li>
                ${tarea}
                <button class="eliminar" onclick="eliminarTarea(${index})">
                    Eliminar
                </button>
            </li>
        `;
    });
}

function eliminarTarea(index){

    tareas.splice(index,1);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    mostrarTareas();
}