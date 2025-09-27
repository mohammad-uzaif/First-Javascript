// // // // data types


// // // // primitive data types (7types)
// // // // number,string,boolean,undefined,null,bigint,symbol

// // // // number
// //  let a = 10;
// //  let b = 2.36;
// // // console.log(a,b);
// // ------type of
// // console.log(typeof b);

// // // // string
// // // let c = "strike is comming"
// // // let d = "Azzy";
// // // let e = 'uzaif';//another way of writing string single quote
// // // console.log(c,d,e);

// // // // boolean
// // // let login = true;
// // // let f = false;
// // // console.log(login,f);

// // // // undefined
// // // let user;
// // // console.log(user); //it will produced undefined
// // // // note :bonus knowledge
// // // // const name;
// // // // console.log(name); it will give error , because const requires a value that will apper in differnt in let 


// // // // bigint
// // // let numb =2348797987979798797978978978977;
// // // let num =2348797987979798797978978978977n;
// // // console.log(numb, num);

// // // // null
// // // const weathers = null; //it will worked
// // // let weather = null;
// // // console.log(weathers, weather);

// // // // symbol
// // // // it is created for the uniques things
// // // const id1 = Symbol("id");
// // // console.log(id1);

// // // // an example
// // // const id4 = Symbol("id");
// // // const id5 = Symbol("id");
// // // console.log(id4==id5); // == : it is comparioson operator



// // // // non-primitive data types
// // // // array,object,function


// // // array
// // let arr = [10,20, "uzaif", true];
// // console.log(arr);

// // // object
// // // for ex: uzaif 12347 21 gen

// // let user ={
// //     name:"uzaif",
// //     account:12347,
// //     age:21,
// //     category:"gen"
// // }
// // console.log(user);

// // // function
// // function add(){
// //     console.log("hello world")
// // }
// //  add();

// // //  bonous point : yaha per function ko kisi variable me store kara skte hai diffrent from other lang.
// // let s = function add(){
// //     console.log("hello world");
// // }
// // console.log(s);
// // s(); //it also make to print the function in this case!



// // knowldege : jitne bhi non-primitive data types sabh object hai and jo primitive me null hai wo object show karta wo bug hai hai !
// // primitve data types is immutable hai!
// // non-primitve is mutable !

// let user ={
//     name:"mohan",
//     age:20
// }
// user.name="uzaif"
// console.log(user);