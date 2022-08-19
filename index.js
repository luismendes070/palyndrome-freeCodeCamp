// npx ts-node index.js
// 31415000051413
// 31411413
import { String, ReturnType } from "typescript";

type StringReturnType = ReturnType < () => String >; 

function palindrome(str:StringReturnType) {
 var re = /[^0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome("31415000051413");
// palindrome("A man, a plan, a canal. Panama");