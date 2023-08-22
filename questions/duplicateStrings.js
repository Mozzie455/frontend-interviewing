// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */
function removeDuplicates(str){
 const arr = str.split(' ');

 const set = new Set(arr);
 const newString = [...set].join(' ');

 return newString;
}
