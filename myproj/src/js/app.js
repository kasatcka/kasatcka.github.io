$(function(){
   var doc_h = $(window).height();
   
       $(window).scroll(function(){  
        if ($(window).scrollTop() > doc_h/2)
        {
            $('#fixed').css('display', 'block');            
        }
        else{
            $('#fixed').css('display', 'none');
            };
      } ); 
      
   $('#fixed').click(function(){
       $(window).scrollTop(0);
});                
});