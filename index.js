 function cambiarColorRojo() {
    document.body.style.backgroundColor = "red";
}


function cambiarColorVerde() {
    document.body.style.backgroundColor = "green";
}

document.getElementById("rojo").addEventListener("click", cambiarColorRojo);
document.getElementById("verde").addEventListener("click", cambiarColorVerde);

const casilla = document.createElement("button");
document.body.appendChild(casilla);
casilla.id = "aqui";
casilla.textContent = 'Pulsa aquí';