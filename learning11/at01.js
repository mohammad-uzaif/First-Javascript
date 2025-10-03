//this code include notes about STRING

let firstName = "mohd";
let lastName = "uzaif";
let surName = 'ansari';
let info = `my name is mohd uzaif ansari
and am indian 
i am persuing engineering in 
computer scirnce 
curently i am in third year 5th semster`
let name1 = new String("Mohd Uzaif Ansari")

console.log(lastName);
console.log(surName);
console.log(info);
console.log(name1);

console.log(typeof lastName); //string
console.log(typeof surName);  //string
console.log(typeof info);     //string
console.log(typeof name1);   //Object

/*
notes :
the above of four first, last, sur, info is PRIMITIVE Strings but (name1) is String object #slower and it is compared by refrence not by value

For EXAMPLE :
let str1 = "hello";
let str2 = new String("hello");

console.log(str1 === str2); // false
*/