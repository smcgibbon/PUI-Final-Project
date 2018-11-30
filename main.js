




$(document).ready(function() {

  $("#menu-button").click(function(event) {
    // Removes focus of the button.
    $(this).blur();
  });

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

    if ($(this).scrollTop() < 130) {
      //$('#section-header-projects').css({color: "black"});
      $('#name').addClass("name-active");
    }
    else {
      $('#name').removeClass("name-active");
      $('#name').removeClass("name-active-initial");
    }

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

      //console.log(($('#section-header-projects')).style);
      console.log($(this).scrollTop());
      var item = $("#section-header-projects");
      // console.log(item).style();
      //console.log(item);

  });

  // MENU BUTTON CLICK LISTENER

  $("#menu-button").click(function() {
     console.log("it worked!");

     if ($(".dropnav").hasClass("dropnav-active") == false) {
       console.log("it worked");
       $(".dropnav").addClass("dropnav-active");
     }
     else {
      $(".dropnav").removeClass("dropnav-active");
     }





  });

  if (window.innerWidth > 820) {
    $('.navbar-menu-item').removeClass("collapse");
    console.log(window.innerWidth);
    console.log("skinny");
  }
  else {
    $('.navbar-menu-item').addClass("collapse");
    console.log(window.innerWidth);
    console.log("thicc");
  }

  window.onresize = function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (window.innerWidth < 820) {
      $('.navbar-menu-item').addClass("collapse");
      $('#menu-button').addClass("menu-button");
      console.log(window.innerWidth);
      console.log("skinny");
    }
    else {
      $('.navbar-menu-item').removeClass("collapse");
      console.log(window.innerWidth);
      console.log("thicc");
    }

  };
});
