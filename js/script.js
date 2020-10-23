
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



var btn = document.querySelector(".icon");
var closebtn = document.querySelector('.closebtn')
btn.addEventListener("click", () => {
    var modal = btn.dataset.modalType;
    document.style.display = "block";
});

window.addEventListener("click", (e) => {
    if (e.target != modal && modal.style.display == 'none') {
        modal.style.display = "none";
    }
});

closebtn.addEventListener("click", () => {
        modal.style.display = "none";
});


