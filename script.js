const calculator = document.querySelector(".container-calc");
const cargando = document.querySelector(".cargando");

addEventListener("load",()=>{
    setTimeout(() => {
        cargando.style.display = `none`
        calculator.style.opacity = 1
    }, 1000);
    
})