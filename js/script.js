
// var modal = document.querySelector(".modalblock");
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



var modal = document.getElementsByClassName("modalblock");
var btn = document.getElementsByClassName("icon");
var overlay = document.getElementById('overlay')
var closebtn = document.querySelector('.closebtn')
for(let i=0; i<modal.length; i++) {
    btn[i].addEventListener("click", () => {
        modal[i].style.display = "block";
    });
    
    window.addEventListener('click', (e) => {
        if(e.target == modal[i]) {
            modal[i].style.display = 'none'
        }
    })
    
}


// slider bar
var indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},6000);
function muestraSlides(n){
    var i;
    var slides = document.getElementsByClassName('miSlider');
    var barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}