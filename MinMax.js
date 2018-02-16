/**
 * 
 */

function HighestAndLowest(str){
	var numbers = str.split(" ");
	return Math.max.apply(null,numbers) + " "+ Math.min.apply(null,numbers);
}

var max = HighestAndLowest("7 22 12 99");
console.log(max);