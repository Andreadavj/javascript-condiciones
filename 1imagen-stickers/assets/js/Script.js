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

const verificar = ()=> {
    const sticker1 =parseFloat(document.querySelector('.sticker1').value) || 0;
    const sticker2 =parseFloat(document.querySelector('.sticker2').value) || 0;
    const sticker3 =parseFloat(document.querySelector('.sticker3').value) || 0;

    const suma = sticker1 + sticker2 + sticker3;
    const result = document.getElementById('result');
    if(suma <= 9){
        document.getElementById('result').textContent =  'el resultado es: '+ suma +'Llevas menos stickers';
    }
    else if(suma <= 10 && suma >= 1 ){
        document.getElementById('result').textContent = 'el resultado es: '+ suma +'Llevas la cantidad correcta de stickers'; 
    }
    else{
        document.getElementById('result').textContent = 'el resultado es: '+ suma +'Llevas demasiados stickers';
    }
}