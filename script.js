
$(document).ready(function() {
    var $brandmonkey = $('#brandmonkey')
    $brandmonkey.hide();
    
    $brandmonkey.addClass('brandmonkey');
    
    $brandmonkey.removeClass('brand-logo img').addClass('brand-final');

 $(function(){

  
  var bounceButton = $("li.nav-li");
  
    bounceButton.click(function(){
       $(this).toggleClass('bounce');
       

    });

    
  });
