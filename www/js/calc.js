$(document).ready(function(){
	//initialization
	var inputFu = '';
	var input1 = '';
	var input2 = '';
	var justAnswered = true;

	$(".output").val('0');

	//bindings
	$(".input-num").click(handleInputNum);
	$(".input-fu").click(handleInputFu);
	$(".input-calc").click(calculate);

	//functions
	function handleInputNum(e){
		e.preventDefault();

		// if (justAnswered){
		// 	input1 = '';
		// 	justAnswered = false;
		// }

		//if fu is empty, append to input1, else append input2
		if (inputFu == "")
			input1 += $(this).html();
		else
			input2 += $(this).html();

		updateOutput();
	}

	function handleInputFu(e){
		e.preventDefault();

		//if input2 already entered, calc and then add fu
		if (input2 != "")
			calculate(event);

		inputFu = $(this).html();
		updateOutput();
	}

	function calculate(e){
		e.preventDefault();

		if (input1 == "" || inputFu == "" || input2 == "")
			return;

		switch(inputFu){
			case '/':
				input1 = parseFloat(input1) / parseFloat(input2);
				break;
			case '*':
				input1 = parseFloat(input1) * parseFloat(input2);
				break;
			case '-':
				input1 = parseFloat(input1) - parseFloat(input2);
				break;
			case '+':
				input1 = parseFloat(input1) + parseFloat(input2);
				break;
		}

		inputFu = "";
		input2 = "";
		updateOutput();
	}

	function updateOutput(){
		$(".output").val(input1 + " " + inputFu + " " + input2);
	}
});