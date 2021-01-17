# images-progressbar
Esta es una aplicacion en donde se ultiza javascript para realizar un progressbar que nos muestra el porcentaje
de carga de nuestra imagen al momento de subirla.
En esta aplicacion vamos hacer uso de cloudinary que es un servicio que se va a encargar de la subida de 
imagenes que se realice en la app.

# Subir Imagenes 
Para subir nuestras imagenes a cloudynari, esta nos provee de una api y en configuraciones para subir nos da
un opcion del uso de preset que es como una clave para poder subir solo nosostros las imagenes.

Para subir nuestras fotos vamos a ocupar el método POST y para eso vamos a ocupar fetch y para facilitar la escritura
del metodo POST vamos a ocupar la biblioteca axios (https://github.com/axios/axios) por medio de una CDN por lo tanto 
vamos a escribir el metodo POST con escritura axios
