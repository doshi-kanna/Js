let a='1';
let b=1;
console.log(a==b);//true
console.log(a===b);//false
console.log(a!=b);//false
console.log(a!==b);//true
let res1=+a + b--;
console.log(res1);//2
let res =a+b;
console.log(res);//11
 
let a1='0';
a=Boolean(a1);
let b1=0;
b=Boolean(b);
console.log(a==b);//true

console.log(a===b);// strict equality operator is === //true
console.log(a!=b);//false
console.log(a!==b);//false


//rule null and undefined null===undefined is TRUE
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(null>=0);//true
console.log(null>0);//false
console.log(null<=0);//true
console.log(null<0);//false
console.log(null==0);//ALWAYS false
//undefined checks the absence of value rules 
console.log(undefined>=0);//false
console.log(undefined>0);//false
console.log(undefined<=0);//false
console.log(undefined<0);//false
console.log(undefined==0);//false
console.log(undefined===0);//false
console.log(undefined==null); //this is a rul come true//true
//NaN checks the Not a Number
console.log(NaN>=0);//false
console.log(NaN>0);//false
console.log(NaN<=0);//false
console.log(NaN<0);//false
console.log(NaN==0);//false
console.log(NaN===0);//false
//NaN is not equal to anything including itself
console.log(NaN==NaN);//false
console.log(NaN===NaN);//false
//to check NaN use isNaN()
//isNaN() function checks whether a value is NaN
console.log(isNaN(NaN));//true  
console.log(isNaN(5));//false
console.log(isNaN('hello'));//true
console.log(isNaN('5'));//false
console.log(isNaN(undefined));//true
console.log(isNaN(null));//false
//isFinite()
//isFinite() function checks whether a value is a finite number
console.log(isFinite(NaN));//false
console.log(isFinite(Infinity));//false
console.log(isFinite(-Infinity));//false
console.log(isFinite(5));//true
console.log(isFinite('5'));//true
console.log(isFinite('hello'));//false
//type conversion
let str='123';
let num=Number(str);
console.log(num);//123
console.log(typeof num);//number
let str1='hello';
let num1=Number(str1);
console.log(num1);//NaN
console.log(typeof num1);//number
let bool=true;
let num2=Number(bool);
console.log(num2);//1
console.log(typeof num2);//number
let bool1=false;
let num3=Number(bool1);
console.log(num3);//0
console.log(typeof num3);//number
let num4=String(123);
console.log(num4);//'123'
console.log(typeof num4);//string
let num5=String(true);
console.log(num5);//'true'
console.log(typeof num5);//string
let num6=String(false);
console.log(num6);//'false'
console.log(typeof num6);//string
let str2='123';
let bool2=Boolean(str2);
//COMPARISON OPERATORS
console.log(bool2);//true
console.log(typeof bool2);//boolean
let str3='';
let bool3=Boolean(str3);
console.log(bool3);//false
console.log(typeof bool3);//boolean


let str4='goms';
let bool4='Zoms';
console.log(str4>bool4);//true
//why because it compares the unicode values of the characters how 
//how they found give me a stepwise explaination
