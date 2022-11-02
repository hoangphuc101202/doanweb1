// thu tu bat dau
var slideIndex=1;
let slides = document.getElementsByClassName('slide');

function ShowSlide(slideIndex){
        let i;

        let dots = document.getElementsByClassName("dot");
        
        

        for( i=0 ;i< slides.length;i++){
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }                                                           
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].className += " active";
}

function currentSlide(n){
    slideIndex = n;
    ShowSlide(slideIndex);
}


const next = document.getElementById('next')
const prev = document.getElementById('prev')

next.onclick = function(){
    ShowSlide(slideIndex++)
    if (slideIndex > slides.length) {slideIndex = 1};
}

prev.onclick = function(){
    ShowSlide(slideIndex--)
    if (slideIndex < 1) {slideIndex = slides.length}
}

window.onload = ShowSlide(slideIndex);

