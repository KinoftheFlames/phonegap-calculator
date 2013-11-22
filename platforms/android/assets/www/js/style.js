$(document).ready(function(){
	var buttonWidth = parseInt($(".calc-input button").css('width'));
	var inputHeight = buttonWidth * .8;
	var fontSize = inputHeight * .4;

	$("button, input").css('height', inputHeight + "px");
	$("button, input").css('font-size', fontSize + "px");
});