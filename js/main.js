$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
    });
  });

// Go to the next item
$('.nextBtn').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
})
// Go to the previous item
$('.prevBtn').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
})

const menuToggle= document.querySelector(".menu-bars");
const nav = document.querySelector(".mob-menu__nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});