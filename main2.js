




$(document).ready(function() {

  // http://jsfiddle.net/BjpWB/4/

  $("#projects-link").click(function() {
     scrollToAnchor('projects');
  });

  $("#writing-link").click(function() {
     scrollToAnchor('writing');
  });

  $("#aboutme-link").click(function() {
     scrollToAnchor('about-me');
  });

  $("#contact-link").click(function() {
     scrollToAnchor('contact');
  });

  $("#contact-link2").click(function() {
     scrollToAnchor('contact');
  });

  $("#logo").click(function() {
     scrollToAnchor('cover');
  });


  function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  // SCROLL EFFECTS


// Activates Name Highlight Effect on Page Load
  $('#name').addClass("name-active-initial");

  $(document).scroll(function() {

    if ($(this).scrollTop() > 630) {
      //$('#section-header-projects').css({color: "black"});
      $('#sidenav').addClass("sidenav-active");
    }
    else {
      $('#sidenav').removeClass("sidenav-active");
    }
/*
    if ($(this).scrollTop() > 130 && $(this).scrollTop() < 1000) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-projects').addClass("header-active");
      $("#projects-link").addClass("link-active");
    }
    else {
      $('#section-header-projects').removeClass("header-active");
      $("#projects-link").removeClass("link-active");
    }

    if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1600) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-writing').addClass("header-active");
      $("#writing-link").addClass("link-active");
    }
    else {
      $('#section-header-writing').removeClass("header-active");
      $("#writing-link").removeClass("link-active");
    }

    if ($(this).scrollTop() > 1600 && $(this).scrollTop() < 2100) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-aboutme').addClass("header-active");
      $("#aboutme-link").addClass("link-active");
    }
    else {
      $('#section-header-aboutme').removeClass("header-active");
      $("#aboutme-link").removeClass("link-active");
    }

    if ($(this).scrollTop() > 2100) {
      //$('#section-header-projects').css({color: "black"});
      $('#section-header-contact').addClass("header-active");
      $("#contact-link").addClass("link-active");
    }
    else {
      $('#section-header-contact').removeClass("header-active");
      $("#contact-link").removeClass("link-active");
    }
*/

      window.onresize = function(){
        var w = window.innerWidth;
        var h = window.innerHeight;
        console.log("width is: " + w);
        console.log("height is: " + h);

      };


      console.log($(this).scrollTop());
      var item = $("#section-header-projects");
  });
});
