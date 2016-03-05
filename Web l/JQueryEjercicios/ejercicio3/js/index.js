$( "a" ).click(function() {
  $( "div" ).fadeIn( 3000, function() {
    $( "span" ).fadeIn( 100 );
  });
  return false;
});