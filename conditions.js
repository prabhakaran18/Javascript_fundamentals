if ("0") {                               //true
    console.log( 'Hello' );
  }

let officialName = prompt("What is the official name of JavaScript?","type here");
if(officialName == 'ECMAScript')
   console.log('Right!');
else 
   console.log('You don’t know? ECMAScript!');

let number = +prompt("Type some number","");
if(number>0)
   console.log(1);
else if(number<0)
   console.log(-1);
else
   console.log(0);

/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

//let result = (a+b < 4) ? 'Below' : 'over';

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

//let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
       