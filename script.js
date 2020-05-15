"use strict";

var toggler = document.querySelector(".header-nav__toggler");
var navbar = document.querySelector(".header-nav");
var lastScroll;

toggler.onclick = function () {
  navbar.classList.toggle("show");
};

document.addEventListener("scroll", scrollHide);
document.addEventListener("resize", scrollHide);

function scrollHide() {
  var secondScroll = window.pageYOffset;

  if (!navbar.classList.contains('show')) {
    if (lastScroll < secondScroll) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
  }

  lastScroll = secondScroll;
}