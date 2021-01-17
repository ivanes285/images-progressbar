const imagePreview = document.getElementById("img-preview");
const imgUploader = document.getElementById("img-uploader");
const progressBar = document.getElementById("progreso");
const percent = document.getElementById("percent");

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dlaafuwfn/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "dkwqis5w";

imgUploader.addEventListener("change", async (event) => {
  //console.log(event);
  const file = event.target.files[0]; //ruta de nuestra imagen al cargar con el evento
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);


 
  imagePreview.setAttribute("src", " "); //refrescamos para que el porcentaje nos aparezca
  const result = await axios.post(CLOUDINARY_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress(e) {
      const porcentaje = Math.round((e.loaded * 100) / e.total); // Aqui tranformamos en valores de porcentaje 
      console.log(porcentaje);
      percent.innerHTML = `<p>${porcentaje}%</p>`; // colocamos porcentaje numerico en pantalla 
      progressBar.setAttribute("value", porcentaje);
    },
  });
  console.log(result);
  percent.innerHTML = ``; //reseteamos el porcentaje numerico para que no se posicione
  progressBar.setAttribute("value",0);//reseteamos el porcentaje de la barra
  imagePreview.setAttribute("src", result.data.secure_url); //esta es la ruta en la respuesta del servidor
});
