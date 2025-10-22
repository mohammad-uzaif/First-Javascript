//for in-loop 

const user = {
    names : "Uzaif",
    age : 20,
    city : "Jaunpur",
    position :"student"
}

for(let keys in user){
    console.log(keys, user[keys]);
}