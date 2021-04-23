$(document).ready(function () {
 
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });
 
});

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


let drop = document.querySelector(".drop");
let dropdown = document.querySelector(".header-dropdovn");

    drop.addEventListener('click', () => {
        dropdown.classList.toggle("show");
    })

  window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
  }