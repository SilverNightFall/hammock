// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery-ui 
//= require jquery_ujs 

//I used functions to call code such as $() and function()
//I used effects like fade in, fade out and slide toggle
//I used the Document as a node tree to find the different nodes elements
//I used events to activate the functions like mouseover, mouseout, fade in and out, slidetoggle and click
//I used selectors to find the child, parent or selector needed for the function


//This tells the jQuery to run when the document is ready
$(document).ready(function () {
//This tells the image with class hidden when moused over to hide the image
	$('img.hidden').mouseover(function(){
		$(this).css("display","none");
		//This tells the div with id hidden to fade in when the image is moused over
		$('div#hidden').fadeIn(200);
//this tells it to stop the function until moused over again
		return false;
	});
//This tells the div with id hidden to hide when it is moused out of
	$('div#hidden').mouseout(function(){
		$(this).css("display", "none");
//This tells the image with class hidden when moused out of to fade in the image		
		$('img.hidden').fadeIn(200);
		return false;
	});

//This links the store entry image to the submit button, 
//when it is clicked it knows which item to add to the cart
	$(function() {
		return $('.store .entry > img').click(function() {
			return $(this).parent().find(':submit').click();
		});
	});
});








