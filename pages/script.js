$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top > 600){
    $(".myHeader").addClass('hide');
  }
  if (top > 900){
    $(".myHeader").addClass('above');
    $('.myHeader').removeClass('hide');
  }
  if (top > 1500){
    $(".myHeader").addClass('fixed');
    $('.myHeader').removeClass('above');
  }
  if (top < 1500){
    $('.myHeader').removeClass('fixed');
    $(".myHeader").addClass('above');
  }
  if (top < 900){
    $('.myHeader').removeClass('above');
  }
  if (top < 600){
    $('.myHeader').removeClass('hide');
  }
});