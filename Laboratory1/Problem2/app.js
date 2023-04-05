var counter = 0;

function printValue(divId, value) {
	 document.getElementById(divId).innerHTML = value;
 }

printValue("counter", 0);
document.getElementById("inc").addEventListener("click",increment);
document.getElementById("dec").addEventListener("click",decrement);
function increment(){
	if(counter < 10)
	counter++;
	printValue("counter", counter);
}
function decrement(){
	if (counter > 0)
	counter--;
	printValue("counter", counter);
}