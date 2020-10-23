
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

