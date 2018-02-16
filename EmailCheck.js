/**
 * 
 */
function ValidateEmail(inputText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat)){
return true;
}else{
return false;
}
}

var e = ValidateEmail("mysite.ourearth.com [@ is not present]");
console.log(e);