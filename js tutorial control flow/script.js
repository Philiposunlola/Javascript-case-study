// for loops

  // for(let i = 0; i < 5; i++){
  //     console.log('in loop:', i);
  // }
 
  // console.log('loop finished');


//   const names = ['Philip', 'Nicholas', 'John'];

//   for(let i = 0; i < names.length; i++){
//       console.log(names[2]);
//      let html = `<div>${names[i]}</div>`;
//       console.log(html)
//  }

//  while loops
    // const names = ['Philip', 'Nicholas', 'john'];
  // let i = 0;

  // while(i <= 5){
  //   console.log('in loop: ', i);
  //   i++;
  // }

  // let i = 0;
  // while(i < names.length){
  //   console.log(names[i ]);
  //   i++;
  // }
  //  do while loops 
  
    // let i = 5;

    // do{
    //   console.log('val of i is: ', i);
    //   i++;
    // } while(i < 5);


    // if statements
    // const age = 25; 

    // if (age > 20) {
    //   console.log('you are over 25 years old');
    // }

    // const ninjas = ['Philip', 'nicholas', 'jooh', 'ope'];

    // if (ninjas.length > 3){
    //   console.log("that's a lot of ninjas");
    // }

    // else if statement
    
    // const password = 'p@ssword1234';
    // if (password.length >= 12 && password.includes('@')) {
    //   console.log('This password is supper strong ');
    // }else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    //   console.log('This password is strong enough!');
    // } else{
    //   console.log('This password is not long enough!');
    // }

    // logical NOT (!)

    // let user = false;

    // if (!user) {
    //   console.log('you must be logged in to continue');
    // }
    // console.log(!true);
    // console.log(!false);

    //  break and continue

  //   const scores  = [50, 25, 0, 30, 100, 20, 10]; 

  // for (let i = 0; i < scores.length; i++) {

  //   if(scores[i] === 0){
  //     continue;
  //   }
  //   console.log('your score: ', scores[i]);

  //   if(scores[i] === 100){
  //     console.log('congratulations, you have reached the top score');
  //     break;
  //   } 
  // }

  //  switch statements

  // const grade = 'D';

//  switch (grade) {
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got an B!');
//     break;
//   case 'C':
//     console.log('you got an C!');
//     break;
//   case 'D':
//     console.log('you got an D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//       break;
//   default:
//     console.log('not a valid grade')
//     break;
//  }

// variables and block scope
//   let age = 30;
//   let names = 1000; 


//   if (true) {
//    let age = 50;
//     let names ='osunlola';
//     console.log('inside 1st code block: ', age, names);
// ;
//     if (true) {
//       let age = 50
//       console.log('inside he 2nd code block: ', age, names);
//     }
    
//   }
//   console.log('outside code block: ', age, names);


// function declaration
// function greet() {    
//     console.log('Hello World');
// }

// greet();
// greet();
// greet();


// function expression"
// const speak = function(name = "philip", time = "morning"){
//   console.log(`good ${time} ${name}`);
//  };

// returning value
// regular function
// const calcArea = function(raduis) {
//   return 3.14 * raduis**2;
// }; 

// arrow funcion
// const calcArea = (raduis) =>{
//  return 3.14 * raduis**2;
// }


// const area = calcArea(5);
// console.log(area);


// const great = () =>'hello, world'; 
// const result = great();
// console.log(result);



// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//    total += products[i] + products[i] * tax;
//   }
// return total;   
// }

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//    }
//    return total;
// }

// console.log(bill([10, 15, 30], 0.2 ));


// const name = 'philip';

// function

// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// method

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//  callbacks functions & foreach

// const myFunc = (callbankfunc) => {
//   let value = 50;
//   callbankfunc(value);
// };

// myFunc ( value => {
//   console.log(value);
// })


// let people = ['philip', 'nicholas', 'john', 'ope', 'madu'];

// const logPerson = (people, index) => {
//   console.log(`${index} - hello ${people}`);
// };

// people.forEach(logPerson);

// people.forEach( (person, index) =>{
//   console.log(index, person);
// }); 

// people.forEach(logPerson);

// get a reference to the "ui"
const ui = document.querySelector('.people');

const people = ["philip", "nicholas", "john", "madu"];

let html = ``;

people.forEach( people=> {
  html += `<li style="color: blue"> ${people}</li>`;
});

console.log(html); 
ui.innerHTML = html;
  
