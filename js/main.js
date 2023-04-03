// timer
function handleTickInit(tick) {
    var locale = {
        YEAR_PLURAL: 'года',
        YEAR_SINGULAR: 'год',
        MONTH_PLURAL: 'месяцев',
        MONTH_SINGULAR: 'месяц',
        WEEK_PLURAL: 'недель',
        WEEK_SINGULAR: 'неделя',
        DAY_PLURAL: 'дней',
        DAY_SINGULAR: 'день',
        HOUR_PLURAL: 'часов',
        HOUR_SINGULAR: 'час',
        MINUTE_PLURAL: 'минут',
        MINUTE_SINGULAR: 'минута',
        SECOND_PLURAL: 'секунд',
        SECOND_SINGULAR: 'секунда',
        MILLISECOND_PLURAL: 'милисекунд',
        MILLISECOND_SINGULAR: 'милисекунда'
    };

    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) { continue; }
        tick.setConstant(key, locale[key]);
    }


    var nextEvent = new Date("2023-04-20");

    Tick.count.down(nextEvent + '-01-01').onupdate = function(value) {
        tick.value = value;
    };

}

new Swiper(".about-slider", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".tickets-slider", {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".nav-toggler").click(function(e){
  e.preventDefault();
  $("#navbar").toggleClass("show");
  $("body").toggleClass("overflow-none");
})
