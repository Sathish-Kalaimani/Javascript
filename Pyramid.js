/**
 * 
 */
function generatePyramid() {
    var Rows = 6;
    var output="";
    for (var i = 1; i <= Rows; i++) {
        for (var j = 1; j <= i; j++) {
            output+="*";
        }
        console.log(output);
        output="";
    }
}  

generatePyramid();