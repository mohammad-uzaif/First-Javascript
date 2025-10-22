//OBEJCTS : creating objects

const user = {
    names : "Uzaif",
    age : 20,
    city : "Jaunpur",
    position :"student"
}
console.log(user);
console.log(typeof user); //object

//how to acces particular key

console.log(user.city,);
console.log(user.position);

console.log(typeof user.age); //number
console.log(typeof user.position); //object


// if i want to add somenting for ex user-phone number

user.phone =8994924477;
console.log(user);


//if i want update a key for ex user-position

user.position ="employe";
console.log(user);


//if i want to delete any key 

delete user.city;

console.log(user);

//WE DONE CRUD OPERATION >>> CREATE : READ : UPDATE : DELETE 