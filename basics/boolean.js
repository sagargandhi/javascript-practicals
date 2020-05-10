let age = 85;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);

if (isChild){
    console.log("Welcome to Disneyland.. You are entitled for a child discount..")
} else if (isSenior){
    console.log("Welcome to Disneyland.. You are entitled for a senior discount..")
} else {
    console.log("Welcome to Disneyland..")
}