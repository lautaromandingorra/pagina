
function muestra_oculta(id) {
   
    let div = document.getElementById(id);
    
    if (div.style.display == "none"){ 
      div.style.display = "flex";
    } 
    else {
      div.style.display = "none";
    }
}
var clickcontador = 0;

  function cambiarImagen() {
    clickcontador++;

    
    if (clickcontador > 6) {
      var imagenelemento = document.getElementById('miimagen');
      
      if (imagenelemento.alt === 'Imagen 1') {
        imagenelemento.src = 'imagen2.jpg';
        imagenelemento.alt = 'Imagen 2';
      } else {
        imagenelemento.src = 'imagen1.jpg';
        imagenelemento.alt = 'Imagen 1';
      }

      
      clickcontador = 0;
    }
  }
