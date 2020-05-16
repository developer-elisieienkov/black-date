"use strict";

var navToggler = document.querySelector(".header-nav__toggler"),
    navbar = document.querySelector(".header-nav"),
    profileCollapsibleSection = document.getElementById("aboutPerson"),
    profileCollapsingButton = document.getElementById("allInfo"),
    lastScroll;

function showToggler(togleButton, targetElem, toglingClass) {
  togleButton.onclick = function () {
    targetElem.classList.toggle(toglingClass);
  };
}

showToggler(navToggler, navbar, "show");

if (profileCollapsibleSection != undefined) {
  showToggler(profileCollapsingButton, profileCollapsibleSection, "show");
}

;
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

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 32.922082,
      lng: 130.623257
    },
    zoom: 16,
    disableDefaultUI: false
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 32.922082,
      lng: 130.623257
    },
    map: map,
    title: "We Are Here",
    icon: "images/location(2).svg"
  });
}