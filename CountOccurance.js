/**
 * 
 */

function CountOccurance(word,letter){
	var words = word.split(''),count=0;
	for(i=0;i<words.length;i++){
		if(words[i]==letter){
			count++;
		}
	}
	return count;
}
var getCount = CountOccurance("kalaimani",'a');
console.log("'A' occurs "+getCount+" times");