$(function() {

$(".rightLink").mouseover (function() {
	$(this).css("opacity", "73").fadeIn(125, 125);
	});
		
$(".rightLink").mouseover (function() {
	$(this).css("text-shadow", "0 0 1em lightsteelblue").fadeIn();
	});
	
$(".rightLink").mouseleave (function() {
    $( this ).css( "text-shadow", "none" );
  });
  
$(".rightLink").mouseleave (function() {
    $( this ).css( "opacity", "0.3" );
  });

});