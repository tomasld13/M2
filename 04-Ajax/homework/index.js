let getAmigos = () => {
    console.log("hola")
    $.get("http://localhost:5000/amigos", function(data){
        let index = 0;
        $("#lista").empty();
        let arrayAmigos = data;
        while(index < 6){
            if(arrayAmigos[index]){
            let elementoLista = document.createElement("li");
            let contenidoId = document.createElement("li").textContent = arrayAmigos[index].id + " ";
            let contenidoName = document.createElement("li").textContent = arrayAmigos[index].name + " edad: ";
            let contenidoAge = document.createElement("li").textContent = arrayAmigos[index].age + " email: ";
            let contenidoEmail = document.createElement("li").textContent = arrayAmigos[index].email;
            elementoLista.append(contenidoId);
            elementoLista.append(contenidoName);
            elementoLista.append(contenidoAge);
            elementoLista.append(contenidoEmail);
            $("#lista").append(elementoLista);
            }
        index++
        }
    })
}

$("#boton").click(function(){
    getAmigos();
});

$("#search").click(function(){
    let i = document.getElementById("input").value;
    $.get("http://localhost:5000/amigos/" + i, function(amigo){
        document.getElementById("amigo").textContent = amigo.id + " " + amigo.name + " edad: " + amigo.email + " email: " + amigo.email;
    })      
})

$("#delete").click(() => {
    let i = document.getElementById("inputDelete").value;
    $.ajax({
        method: "DELETE",
        url: "http://localhost:5000/amigos/" + i,
    }).done(() => {
        document.getElementById("sucess").textContent = "Te amigo fue elminado con éxito";
        getAmigos();
    })
})