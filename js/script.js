// JavaScript Document
$('.theme-switch').mousedown(function () {
	$( "body" ).toggleClass( "darkmode-body" );
	$( ".topfol" ).toggleClass( "darkmode-topfol" );
	$( ".botfol" ).toggleClass( "darkmode-botfol" );
	$( ".topfol:hover" ).toggleClass( "darkmode-topfol:hover" );
	$( ".botfol:hover" ).toggleClass( "darkmode-botfol:hover" );
});