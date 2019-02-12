function reverseNumber(number) {
   var newStr = '';
   var str = number + '';
   for (var i = str.length-1; i>=0; i--){
     if(str[i]==='-'){
       newStr = -newStr;
     } else {
       newStr += str[i]
     }
   }
   return +newStr;
 }

 reverseNumber(123);
 reverseNumber(-456);
 reverseNumber(10000);
