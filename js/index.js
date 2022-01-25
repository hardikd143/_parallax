$(document).ready(function () {
  function removeActive() {
    for (let i = 0; i < $(".sectionLink").length; i++) {
      let link = $(".sectionLink")[i];
      $(link).removeClass("active");
    }
  }
  $(".sectionLink").click(function () {
    let href = $(this).attr("href");
    removeActive();
    $('.header a[href="' + href + '"]').addClass("active");
    $('.secNav a[href="' + href + '"]').addClass("active");
  });
  function activeSection(actSec) {
    removeActive();
    $('.header a[href="#' + actSec + '"]').addClass("active");
    $('.secNav a[href="#' + actSec + '"]').addClass("active");
  }
  $(".content").on("scroll", function () {
    for (let i = 0; i < $(".section").length; i++) {
      let section = $(".section")[i];
      let Oset = window.pageYOffset + section.getBoundingClientRect().top;

      if (Oset == 0) {
        let id = $(section).attr("id");
        activeSection(id);
      }
    }
  });

  $(".nextSlide").click(function () {
    let nxt = $(this).attr("data-nextslide");
    if (nxt == 3) {
      $(this).attr("data-nextslide", "1");
    } else {
      $(this).attr("data-nextslide", parseInt(nxt) + 1);
    }
    let nxtslide = $("#slide" + nxt)[0];
    nxtslide.scrollIntoView({
      behavior: "smooth",
    });
    $(".prevSlide").attr("data-prevslide", parseInt(nxt) - 1);
    $(".prevSlide").prop("disabled", false);
  });
  $(".prevSlide").click(function () {
    let prev = $(this).attr("data-prevslide");

    if (prev == 1) {
      //   $(this).prop("disabled", true);
      $(this).attr("data-prevslide", "3");
    } else {
      $(this).attr("data-prevslide", parseInt(prev) - 1);
    }
    let prevslide = $("#slide" + prev)[0];
    prevslide.scrollIntoView({
      behavior: "smooth",
    });
    $(".nextSlide").attr("data-nextslide", parseInt(prev) + 1);
    $(".nextSlide").prop("disabled", false);
  });
  $(".slideLink").click(function () {
    let link = $(this).attr("data-toslide");
    let slide = $("#" + link)[0];
    slide.scrollIntoView({
      behavior: "smooth",
    });
  });

  let num = 0;
  let slider = $(".autoSlider")[0];
  function autoSlide(n) {
    let slider = document.querySelector(".autoSlider");
    slider.scrollLeft = n;
  }
  function getVal() {
    w = slider.offsetWidth;
    let arrWidth = [0, w, w * 2];
    setInterval(() => {
      autoSlide(arrWidth[num]);
      num++;
      if (num == 3) {
        num = 0;
      }
    }, 3000);
  }

  getVal();
  let doit;
  $(window).resize(function () {
    clearTimeout(doit);
    doit = setTimeout(getVal, 100);
  });

  $('.menu').click(function(){
    $(this).toggleClass('opennav')
    if ($(this).hasClass('opennav')) {
      $('ul.sectionList').css('left','0')
      $(this).removeClass('fa-bars').addClass('fa-times')
    }
    else{
      $(this).addClass('fa-bars').removeClass('fa-times')
      $('ul.sectionList').css('left','-150px')
    }
  })
});
