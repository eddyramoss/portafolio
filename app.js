let menuVisible = false;
//funcion que oculta o muestra el menu 
function mostrarOcultarMenu(){
    if( menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion 
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion que aplica las animaciones de las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("oracle");
        habilidades[5].classList.add("adobe");
        habilidades[6].classList.add("figma");
        habilidades[7].classList.add("office");
        habilidades[8].classList.add("metodologia");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("proyect");



    }
}

//detecto el scrolling para aplicar la animacion de la barra de animaciones

window.onscroll = function(){
    efectoHabilidades();
}