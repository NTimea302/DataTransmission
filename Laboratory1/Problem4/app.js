document.getElementById("n").addEventListener('input',inputnr );

 function inputnr(){
	var inputNumber = parseInt(document.getElementById("n").value );
	fib( inputNumber );
}

 function fib(n){
	if (typeof n !== 'number') 
		return "not allowed! ";
	if (n < 1 || n > 10)
		return "not allowed! ";

	//fibonacci
	var f1 = 1, f2 = 1;
	var i = 0;
	const a = new Array();
	a[0] = f1;
	while(f2 < n)
	{
		f2 = f1 + f2;
		f1 = f2 - f1;
		//console.log(f1);
		a[++i] = f2;
	}
	return a;
 }