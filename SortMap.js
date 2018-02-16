/**
 * 
 */

const library = [   
  { film: 'Lagaan', rating: '5', year: 2003},  
  { film: 'Bahubali', rating: '4', year: 2015},  
  { film: 'Godfather', rating: '4', year: 1990}];  

console.log(library.sort(function (a,b){return a.year - b.year}));