function test(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="n is undefined"?"Passed":"Failed");
 }
 //test ();
 
(function(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="invalid argument"?"Passed":"Failed");
 })//();

 function test2(){
    console.log(sum(true));
    console.log(sum("cat"));
}

 //console.log("reapelare test");
 test2 ();
 //test();
 