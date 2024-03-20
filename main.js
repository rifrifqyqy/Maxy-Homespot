document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav.navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollPos = $(document).scrollTop();

    $("section").each(function () {
      var target = $(this).attr("id");

      if ($(this).position().top <= scrollPos + 200 && $(this).position().top + $(this).outerHeight() > scrollPos) {
        $("nav ul li a").removeClass("active");
        $('nav ul li a[href="#' + target + '"]').addClass("active");
      }
    });
  });
});
$(document).ready(function () {
  const menu_btn = $("nav.navbar .nav-wrapper .login-button .hamburger");
  const mobile_menu = $("nav.mobile-nav");
  const scrollto = $(".home-pg, .tentang-pg, .asuransi-pg, .contact-pg");

  menu_btn.click(function () {
    menu_btn.toggleClass("is-active");
    mobile_menu.toggleClass("is-active");
  });

  scrollto.click(function () {
    menu_btn.toggleClass("is-active");
    mobile_menu.toggleClass("is-active");
  });
});
