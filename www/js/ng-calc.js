function CalcCtrl ($scope){

	$scope.output = '0';
	var inputNum1 = '';
	var inputNum2 = '';
	var inputFu = '';
	var justAnswered = true;
	
	$scope.inputNum = function(num){
		if (justAnswered){
			inputNum1 = "";
			justAnswered = false;
		}

		//if fu is empty, append to inputNum1, else append inputNum2
		if (inputFu == ''){
			if (inputNum1 == '')
				inputNum1 = "" + num;
			else
				inputNum1 += "" + num;
		}
		else{
			if (inputNum2 == '')
				inputNum2 = "" + num;
			else
				inputNum2 += "" + num;
		}

		updateOutput();
	};
	
	$scope.inputFu = function(fu){
		if (justAnswered)
			justAnswered = false;

		//if inputNum2 already entered, calc and then add fu
		if (inputNum2 != '')
			$scope.inputCalc();

		inputFu = fu;
		updateOutput();
	};

	$scope.calculate = function(){
		if (inputNum1 == "" || inputFu == "" || inputNum2 == "")
			return;

		switch(inputFu){
			case '/':
				inputNum1 = parseFloat(inputNum1) / parseFloat(inputNum2);
				break;
			case '*':
				inputNum1 = parseFloat(inputNum1) * parseFloat(inputNum2);
				break;
			case '-':
				inputNum1 = parseFloat(inputNum1) - parseFloat(inputNum2);
				break;
			case '+':
				inputNum1 = parseFloat(inputNum1) + parseFloat(inputNum2);
				break;
		}

		inputFu = "";
		inputNum2 = "";
		justAnswered = true;
		updateOutput();
	};

	$scope.cancel = function(){
		$scope.output = '0';
		inputNum1 = '';
		inputNum2 = '';
		inputFu = '';
		justAnswered = true;
	};

	function updateOutput(){
		$scope.output = inputNum1;
		if (inputFu != '')
			$scope.output += " " + inputFu;
		if (inputNum2 != '')
			$scope.output += " " + inputNum2;
	}
}