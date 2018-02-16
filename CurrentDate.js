/**
 * 
 */
function CurrentDate(d){
	var date = new Date(d);
	console.log(date.getDate()+"/"+date.getMonth()+1 +"/"+date.getFullYear());
}

CurrentDate("2018/1/21");