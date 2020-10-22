
var modal = document.querySelector(".modalblock");
var btn = document.getElementById("icon1");
var closebtn = document.querySelector('.closebtn')
btn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.classList.add("active");
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

closebtn.addEventListener("click", () => {
        modal.style.display = "none";
});
