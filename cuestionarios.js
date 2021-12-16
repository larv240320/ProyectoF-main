var querystring = window.location.search;
var parametros = new URLSearchParams(querystring);

creador= parametros.get("creador");

axios.get("http://localhost:4567/cuestionarios?creador="+creador)
    .then(function (res) {
        let json = res.data;
        let tablaRespuestas = document.getElementById("tablaCuestionarios");
        var num =1;
        for (var clave in json) {
            if (json.hasOwnProperty(clave)) {
                let fila = document.createElement("tr");
                var col1 = document.createElement("th");
                col1.innerHTML = num;
                var col2 = document.createElement("td");
                col2.innerHTML = json[clave].nombre;
                var col3 = document.createElement("td");
                col3.innerHTML = `<a style="float: right;" type="button" onclick="botonLista(`+json[clave].id+`,\``+json[clave].nombre+`\`)" id="lista" class="btn btn-success">Revisar</a>`

                tablaRespuestas.appendChild(fila);
                fila.appendChild(col1);
                fila.appendChild(col2);
                fila.appendChild(col3);
                num = num +1;
            }
        }
    }) 

function botonLista(id,nombre){
    let params = new URLSearchParams();
    params.append("idCuestionario", id);
    params.append("nombre", nombre);
    window.location= "http://127.0.0.1:5500/lista.html?" + params; 
}