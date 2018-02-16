/**
 * 
 */

function InsertDash(str){
	var numbers = str,previous=false,thisnumber, tempstr = " "; 
	for(i=0;i<numbers.length;i++){
		if((thisnumber= numbers[i]%2==0)&& previous){
			tempstr+="-";
		}
		tempstr += numbers[i];
		previous = thisnumber;
	}
	return tempstr;
}
var string = InsertDash("123468");
console.log(string);