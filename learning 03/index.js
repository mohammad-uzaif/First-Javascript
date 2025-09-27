// data types


// primitive data types (7types)
// number,string,boolean,undefined,null,bigint,symbol

// number
let a = 10;
let b = 2.36;
console.log(a,b);

// string
let c = "strike is comming"
let d = "Azzy";
let e = 'uzaif';//another way of writing string single quote
console.log(c,d,e);

// boolean
let login = true;
let f = false;
console.log(login,f);

// undefined
let user;
console.log(user); //it will produced undefined
// note :bonus knowledge
// const name;
// console.log(name); it will give error , because const requires a value that will apper in differnt in let 


// bigint
let numb =2348797987979798797978978978977;
let num =2348797987979798797978978978977n;
console.log(numb, num);

// null
const weathers = null; //it will worked
let weather = null;
console.log(weathers, weather);

// symbol
// it is created for the uniques things
const id1 = Symbol("id");
console.log(id1);

// an example
const id4 = Symbol("id");
const id5 = Symbol("id");
console.log(id4==id5); // == : it is comparioson operator



// non-primitive data types
// array,object,function