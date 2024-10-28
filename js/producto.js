let count=0;
const precioBase=170.50;
function Disminuir(){
    if(count>0){
        count--;
        document.getElementById('counter').textContent = count;
        actualizarPrecio();
    }
}
function Aumentar(){
    count++;
    document.getElementById('counter').textContent = count;
    actualizarPrecio();
}

function actualizarPrecio(){
    const precioTotal = (count*precioBase).toFixed(2);
    document.getElementById('precio').textContent=precioTotal;
}

function cambiarImagen(newSrc){
    document.getElementById('mainImage').src=newSrc;
}

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
}