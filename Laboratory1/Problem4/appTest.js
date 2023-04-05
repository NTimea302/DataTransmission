function test(x){
    a = fib(x);
    n = a.length;
    var i = 0;
    while ( i < n )
    {
         console.log(a[i++]);
    }
   
 }

 console.log("Test in console");
 test (5);
 test (12);