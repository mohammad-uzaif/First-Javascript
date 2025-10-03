// let i = 1;
// while(i<5){
//     console.log("inside the loop");
//     if(i==3){
//         continue;
//     }
//     else{
//         console.log("hi");
//     }
//     i++;
// }

let i = 1;
while(i<5){
    console.log("inside the loop");
    if(i==3){
        i++;
        continue;
    }
    else{
        console.log(i);
    }
    i++;
}