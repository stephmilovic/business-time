'use strict';

$(document).ready(function(){
	console.log('start');
	// Sounds from myinstants.com
	$('.images a').on('click',function(e){
		console.log('plays');
		e.preventDefault();
		$('audio').remove();
		var fx = $(this).attr('data-fx');
		$('<audio controls="controls" autobuffer="autobuffer" class="thisAudio"> <source src="sounds/'+fx+'.wav"  type="audio/wav"> </audio>').appendTo('.images');
		$("audio")[$('audio').size()-1].play();
	});

});