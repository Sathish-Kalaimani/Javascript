/**
 * 
 */
function Rating(marks){
	var grade, rating;
	if(marks > 0 && marks < 60){
		grade ="F" ;
		rating = "Poor";
	}else if(marks > 61 && marks<= 70){
		grade ="D" ;
		rating = "Fair";
	}else if(marks > 71 && marks<= 80){
		grade ="C" ;
		rating = "Average";
	}else if(marks > 81 && marks<= 90){
		grade ="B" ;
		rating = "Good";
	}else if(marks > 91 && marks<= 100){
		grade ="A" ;
		rating = "Excelent";
	}
	return " Your grade is: "+grade +" and Rating is: "+rating;
}

var ratings =Rating(10);
console.log(ratings);
