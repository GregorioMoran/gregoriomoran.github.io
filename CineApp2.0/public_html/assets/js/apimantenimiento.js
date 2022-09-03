

function nuevaPeli() {
    var codigo = document.getElementById('codigo').value
    var titulo = document.getElementById('titulo').value
    var categoria = document.getElementById('categoria').value
    var poster = document.getElementById('poster').value
    var anno = document.getElementById('anno').value
    var sinopsis = document.getElementById('sinopsis').value 

    if( codigo.length == " " || titulo.length == " " || categoria.length == " " || poster.length == " " || sinopsis.length == " ")
    {
        alert('Datos invalidos: Ingrese toda la información')
    } else {
    

    const nuevaPelicula = {
        "imdbID": codigo,
        "Title": titulo,
        "Year": anno,
        "Type": categoria,
        "Poster": poster,
        "description": sinopsis,
        "Ubication": "Litematica Cinema",
        "Estado": 1
    }
    
    fetch("https://movie.azurewebsites.net/api/cartelera", {
    method: "POST",
    body: (JSON.stringify(nuevaPelicula)),
    headers: {
        "Content-type": "application/json"
 }
     }).then(res => res.json())
    .then(respuesta => alert('Pelicula Enviada con Exito!'))

    }
}
 

function editarPeli() {
    var codigoeditar = document.getElementById('codigoeditar').value
    var tituloeditar = document.getElementById('tituloeditar').value
    var categoriaeditar = document.getElementById('categoriaeditar').value
    var postereditar = document.getElementById('postereditar').value
    var annoeditar = document.getElementById('annoeditar').value
    var sinopsiseditar = document.getElementById('sinopsiseditar').value 

    if( codigoeditar.length == " " || tituloeditar.length == " " || categoriaeditar.length == " " || postereditar.length == " " || sinopsiseditar.length == " ")
    {
        alert('Datos invalidos: Ingrese toda la información')
    } else {
    

    const nuevaPelicula = {
        "imdbID": codigoeditar,
        "Title": tituloeditar,
        "Year": annoeditar,
        "Type": categoriaeditar,
        "Poster": postereditar,
        "description": sinopsiseditar,
        "Ubication": "Litematica Cinema",
        "Estado": 1
    }
    
    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${codigoeditar}`, {
    method: "PUT",
    body: (JSON.stringify(nuevaPelicula)),
    headers: {
        "Content-type": "application/json"
            }
    }).then(res => res.json())
      .then(respuesta => alert('Pelicula Editada con Exito!'))
    }

}


function eliminarPeli(){

    var codigoeliminar = document.getElementById('codigoeliminar').value

    if( codigoeliminar.length == " ")
    {
        alert('Datos invalidos: Ingrese código a eliminar')
    } else {

    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${codigoeliminar}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
                }
        }).then(res => res.json())
          .then(respuesta => alert('Pelicula Eliminada con Exito!'))
        }
}