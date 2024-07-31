// tarea numero uno
const manzana = ()=> {
    tabla = document.querySelector('.mi-imagen')
    if(tabla.style.border === '2px solid red'){
        tabla.style.border = 'none'
    }
    else{
    tabla.style.border = '2px solid red'
    }
}
// tarea numero dos

const mostrar = ()=> {
    const sumauno =parseFloat(document.querySelector('.stickeruno').value) || 0;
    const sumados =parseFloat(document.querySelector('.stickerdos').value) || 0;
    const sumatres =parseFloat(document.querySelector('.stickertres').value) || 0;

    const suma = sumauno + sumados + sumatres;
    
}