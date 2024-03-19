document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav.navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// fungsi active navbar

$(document).ready(function () {
  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();
      var windowCenter = scrollDistance + $(window).height() / 2;

      $("section").each(function () {
        var sectionTop = $(this).offset().top;
        var sectionHeight = $(this).outerHeight();
        var sectionCenter = sectionTop + sectionHeight / 2;

        if (windowCenter >= sectionTop && windowCenter <= sectionTop + sectionHeight) {
          $("nav ul li a.active").removeClass("active");
          $("nav ul li a").eq($(this).index()).addClass("active");
        }
      });
    })
    .scroll();
});
