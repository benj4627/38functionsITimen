function sayHi(){
    console.log('Hej Benjamin');
};
sayHi();

function returnHi(){
    return 'Hejsa';
};

console.log(returnHi());

function calculator(fahr) {
    return ((fahr - 32) * 5) / 9;
  }
  
  calculator(120);
  console.log(calculator(212));


//   let myDog = {
//     name: 'Henning',
//     age: 3,
//     race: 'boston terrier',
//     //funktion inde i object nedenunder.
//     bark(){
//         console.log('vov'); 
//     },
//     introduceMyDog(){
//         console.log(`My dogs name is ${this.name} and he is ${this.age} years old and he is a ${this.race}`);
//     }
//   }

//   myDog.bark();
//   myDog.introduceMyDog();


//arrow functions
function sum1(num1, num2){
    return num1 + num2;
}
console.log(sum1(823143, 12344930));

//samme function, men med arrow syntax
let sum2 = (num1, num2) => num1 + num2;
console.log(sum2(823143, 12344930));

//andet eksempel arrow functios. fordi der kun er 1 parameter, er det ikke nødvendigt med {};
function isPositive(num) {
    return num >= 0; 
}
console.log(isPositive(2));

//den samme funciton som overstående, men med arrow syntax
let isPositive2 = (num) => num >= 0;
console.log(isPositive2(2));