$( "#right" ).mouseover(function() {
  $( ".block" ).animate({ "left": "+=50px" }, "fast" );
});
 
$( "#left" ).mouseover(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "fast" );
}); 