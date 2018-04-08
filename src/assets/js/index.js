(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function (e) {
  // Sidenav Events
  $('#sideNavBtn').on('click', function (e) {
    $('body').addClass('oh');
    $('#sideNav').show().animate({ 'left': '0' });
    $('.overlay').fadeIn();
  });
  $('.overlay, .closeBtn').on('click', function (e) {
    $('body').removeClass('oh');
    $('#sideNav').animate({ 'left': '-450px' });
    $('.overlay').fadeOut();
    setTimeout(function () {
      $('#sideNav').hide();
    }, 2000);
  });

  /* WOW init */
  var wow = new WOW({
    mobile: false
  });
  wow.init();
});

$(function () {
  // Smooth scroll
  $('a[href*="#"]:not(a[data-toggle="tab"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if (window.innerWidth < 768) {
          $('body').removeClass('oh');
          $('#sideNav').animate({ 'left': '-450px' });
          $('.overlay').fadeOut();
          setTimeout(function () {
            $('#sideNav').hide();
          }, 2000);
        }
        setTimeout(function () {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
        }, 500);
        return false;
      }
    }
  });
});

// Init Vue js (if needed)
/*new Vue({
  el: '#app',
  data: {
    
  }
}) */

},{}]},{},[1]);
