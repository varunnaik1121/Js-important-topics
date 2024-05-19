// let num = '11';
// let convertedNum = Number(num);
// console.log(convertedNum);
// let convertedNum2 = parseInt(num);
// console.log(convertedNum2);
//Number Vs parseInt  number convertes null to 0 and [] to 0 but parseInt converts null to NaN and [] to NaN

let isLoggedIn = Boolean(0);
console.log(isLoggedIn);
/* if Boolean([])=>true
    Boolean({})=>true
    Boolean(1)=>true
    Boolean(0)=>false
    Boolean("")=>false;
    Boolean("a")=>true*/

let str = undefined;
console.log(String({}));
