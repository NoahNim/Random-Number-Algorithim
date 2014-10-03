
$(document).ready(function(){
	$("#numberDraw").click(function(){
		var numbers = Math.floor(Math.random()*10);
		
		$("#number").text(numbers);
			if (numbers >= 1){
				$("#number").show(numbers);
			}
			else {$("#number").hide(numbers)};
	})
})
		
