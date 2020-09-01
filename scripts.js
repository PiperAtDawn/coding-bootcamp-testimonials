var btn = document.getElementsByClassName("slider");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");

function changeSlide(slide1, slide2) {
    slide2.style.display="none";
    slide1.style.display="flex";
}

function setListener(btn) {
    btn.addEventListener('click', () => {
        if (slide1.style.display == "none") {
            changeSlide(slide1, slide2);
        }
        else {
            changeSlide(slide2, slide1);
        }
    });
}

for (let i=0; i<btn.length; i++) {
    setListener(btn[i]);
}