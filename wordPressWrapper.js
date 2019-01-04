$(document).ready(function(){
  // console.log($(window).width());
  if ($('.navbar-fixed-top').height() >= 105) {
    $('#imgCover').css('top', 74);
    $('body').css('padding-top', 120);
  } else { 
    $('#imgCover').css('top', 59);
    $('body').css('padding-top', 105);
  }

  // if ($('.navbar-fixed-top').height() == 59) {
  //   var set = -61;
  //   $('#serImg').css('margin-top', set);
  //   $('#imgCover').css('top', 59);
  // }

  // $('#greenNav #brandImg').hover(function(){
  //   $('#greenNav #brandImg').attr('src', 'red-logo-sm.png')
  // }, function() {
  //   $('#greenNav #brandImg').attr('src', 'white-logo-sm.PNG')
  // });

  $('#blueNav #brandImg').hover(function(){
    $('#blueNav #brandImg').attr('src', 'images/red-logo-sm.png')
  }, function() {
    $('#blueNav #brandImg').attr('src', 'images/white-logo-sm.PNG')
  });

if($('nav').attr('id') == 'greenNav'){
  $('#footer #brandImg').hover(function(){
    $('#footer #brandImg').attr('src', 'red-logo-sm.png')
  }, function() {
    $('#footer #brandImg').attr('src', 'green-fill-logo-sm.png')
  });
}

if($('nav').attr('id') == 'blueNav'){
  $('#footer #brandImg').hover(function(){
    $('#footer #brandImg').attr('src', 'images/red-logo-sm.png')
  }, function() {
    $('#footer #brandImg').attr('src', 'images/blue-fill-logo-sm.png')
  });
}

  if ($(window).width() <= 1046) {
        $("#eyebrowMenu").hide();
      }
      else{$("#eyebrowMenu").show();}

      // if ($(window).width() < 768){
      //   $("#siteName").show();
      // }
      
      if ($(window).width() < 975) {
        $("#siteName").hide();
      }

      if ($(window).width() <= 768) {
        $("#siteName").show();
      }
      // else($(window).width() < 768){
      //   $("#siteName").show();}

      if ($(window).width() > 780){
      $("li.dropdown").click(function(){
          $("li.dropdown").addClass("open");
      });
    }
    else{
      $("li.dropdown").click(function(){
            $("li.dropdown").removeClass("open")
            $(".dropdown").css('position', 'static');
            });
          }
        if ($(window).width() <= 752){
          $('#sideNav').hide();
        }
        else{$('#sideNav').show();}

  $('a.dropdown-toggle').click(function() {
    $('li.dropdown').removeClass('dropdown');
  });

  $(window).resize(function() {
      // console.log($(window).width());
     if ($('.navbar-fixed-top').height() >= 105) {
    $('body').css('padding-top', 120);
    $('#imgCover').css('top', 74);
  } else { 
    $('#imgCover').css('top', 59);
    $('body').css('padding-top', 105);
  }
      if ($(window).width() <= 1046) {
        $("#eyebrowMenu").hide();
      }
      else{$("#eyebrowMenu").show();}

      // if ($(window).width() <= 768){
      //   $("#siteName").show();
      // }

      // if ($(window).width() <= 990) {
      //   $("#siteName").hide();
      // }
      // else{$("#siteName").show();}

      if ($(window).width() < 975) {
        $("#siteName").hide();
      }
      if ($(window).width() <= 768) {
        $("#siteName").show();
      }
      if ($(window).width() > 976) {
        $("#siteName").show();
      }

      if ($(window).width() > 780){
      $("li.dropdown").click(function(){
          $("li.dropdown").addClass("open");
          $(".dropdown").css('position', 'relative');
      });
    }
    else{
      $("li.dropdown").click(function(){
            $("li.dropdown").removeClass("open")
            $(".dropdown").css('position', 'static');
            });
          }
        if ($(window).width() <= 752){
          $('#sideNav').hide();
        }
        else{$('#sideNav').show();}

});
  // 1046 for eyebrow-menu
});
