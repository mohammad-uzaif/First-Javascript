let a = 10;
console.log(a);

//output is = 10 and it will run

//let is block scoped

// console.log(age); //not gonna run
{
    let age = 345;
    console.log(age); //it will run
}
// console.log(age); //not gonna run

//redefine not possible !
// let x = 5;
// let x = 6; //it will give error (thats make diff. from var)

//### N O T E 
//manipulation  is possible ! here`s how ?
// let x = "Ajmal";
//  x = "radha";
//  console.log(x); //it will print radha after manipultion but re-define

// proof of dynamic typed lang.
let num = 6;
num = "uzaif";
console.log(num);
