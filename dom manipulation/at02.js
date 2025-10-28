const newElement = document.createElement("h2");
console.log(newElement);
newElement.textContent = "chai pee lo";
newElement.id = "second";

// console.log(newElement);


//select element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);


const element2 = document.createElement("h3");
element2.textContent = "Diwali is comming !";
element2.id = "third";
element2.className = "diwali"

console.log(element2);