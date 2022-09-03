
Cartelera()

const peliculaContenedor = document.querySelector('.pelicula-contenedor')

function Cartelera()
{
fetch('https://movie.azurewebsites.net/api/cartelera?title=&ubication=', {method: 'GET'})
.then (respuesta => respuesta.json())
.then (peliculas => {
    peliculas.forEach(pelicula => {
      
            const cardpelicula = document.createElement('div')
            cardpelicula.classList.add('card-pelicula')

            const cartel = document.createElement('div')
            cartel.classList.add('pelicula-cartel')

            const portada = document.createElement('img')
            portada.classList.add('img-cartelera')
            portada.src = pelicula.Poster

            
            const idpeli = document.createElement("h6");
            idpeli.textContent = `-${pelicula.imdbID.toString().padStart(3, 0)}`;

            const titulo = document.createElement('h5')
            titulo.classList.add('title')
            titulo.textContent =  pelicula.Title


            cartel.appendChild(portada)
            cartel.appendChild(idpeli)
            cartel.appendChild(titulo)
            cardpelicula.appendChild(cartel)
            peliculaContenedor.appendChild(cardpelicula)  

                            })
                }) 
}

