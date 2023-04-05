function printValue(value) {
	$("#res").html(value)
}

function plus() {
	const nr1 = $("#nr1").val();
	const nr2 = $("#nr2").val();
	printValue(parseFloat(nr1) + parseFloat(nr2));
}

function minus() {
	const nr1 = $("#nr1").val();
	const nr2 = $("#nr2").val();
	printValue(parseFloat(nr1) - parseFloat(nr2));
}

function multi() {
	const nr1 = $("#nr1").val();
	const nr2 = $("#nr2").val();
	printValue(parseFloat(nr1) * parseFloat(nr2));
}

function divi() {
	const nr1 = $("#nr1").val();
	const nr2 = $("#nr2").val();
	printValue(parseFloat(nr1) / parseFloat(nr2));
}

$("#inc").on('click', function() { plus(); });
$("#dec").on('click', function() { minus(); });
$("#mul").on('click', function() { multi(); });
$("#div").on('click', function() { divi(); });