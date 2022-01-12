function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
if (a < b)
 {
  return a;
    }
else
 {
  return b;
    }
 }

function pow(x,n) {
   return x**n
};

x = prompt("x","");
n = prompt("n","");

if (n < 1) {
  console.log(`Power ${n} is not supported, use a positive integer`);
} else {
    console.log(pow(x, n));
}


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);