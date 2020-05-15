"use strict";

var toggler = document.querySelector(".header-nav__toggler");
var navbar = document.querySelector(".header-nav");

toggler.onclick = function () {
  navbar.classList.toggle("show");
};