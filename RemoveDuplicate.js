/**
 * 
 */

var arr = [1,1,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

arr = arr.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
console.log(arr);