/**
 * 
 */

function AlphabeticalOrder(str){
	var sorting = str.replace(/\s+/,'').split('');
	sorting.sort();
	console.log(sorting);
}

AlphabeticalOrder("Sathish Kalaimani");