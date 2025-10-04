// return function
function getSum(a,b,c){
      let sum = a+b+c;
      return sum;
}
// let ans = getSum(3,3,3);
// console.log("The sum is :",ans);

function getmyName(firstName, lastName){
    let fullName = (firstName + " " + lastName);
    return fullName;
    //unreachable statement
    let a = 5;
    let b = 6;
    let c = a+b;
    console.log(c);

}

let fullName = getmyName("Mohd","Uzaif");
console.log("Full Name :",fullName);