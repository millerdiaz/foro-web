  //Cambio de posición del Boton
const miOyente = document.getElementById("miBoton") 

function moviendoBoton (x,y){
    miOyente.style.left = x + 'px';
    miOyente.style.top = y + 'px';
}
miOyente.addEventListener("click",()=>{
    const x = Math.floor(Math.random()*500);
    const y = Math.floor(Math.random()*300);
    moviendoBoton(x,y)
    console.log(x,y)
});

// Contador de clicks
let contador = 0;
miOyente.addEventListener("click",()=>{

    contador++  
    const click = document.getElementById("contador").textContent = contador
})
    

//Calcular la raiz cuadrada

const calcular = document.getElementById("calculo");

calcular.addEventListener("click", () => {
    const input = document.getElementById("raiz");
    const valorInput = input.value;
    const numero = Number(valorInput);

    const resultado = Math.sqrt(numero).toFixed(2);
    
    document.getElementById("resultado").textContent = 
        "La raíz cuadrada de " + numero + " es " + resultado;
    input.value = "";
});
document.getElementById("resetear").addEventListener("click", () => {
    location.reload();
});
