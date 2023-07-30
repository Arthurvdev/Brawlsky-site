const carregamento = document.querySelector(".carregamento");


function tl_carregamento(){
    carregamento.style.opacity = "0";

    setTimeout(() => {
        carregamento.style.display = "none";
    }, 500);
}