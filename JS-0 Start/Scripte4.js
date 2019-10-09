/*global console*/
//boolean
var hasDiscount=true;
		if (hasDiscount) 
		{
			document.getElementById('test').innerHTML="yes it work";
		}
		else{
			document.getElementById('test').innerHTML="non";
		}
//array
var socialWebSites=["youtube","facebook","google"];
// first child document.getElementById('test').innerHTML=socialWebSites[0];
document.getElementById('test1').innerHTML=socialWebSites;
//Object
var myInfo={fisrtName:"Soufiane",lastName:"Hmimssa"};
document.getElementById('test2').innerHTML=myInfo.fisrtName;
//String
var myName="Soufiane";
document.getElementById('test3').innerHTML=myName;
//Number
var myNumber=30+10;
document.getElementById('test3').innerHTML=myNumber;

