let count=0;
let precioBase = 170

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