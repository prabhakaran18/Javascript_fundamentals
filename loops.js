let i = 3;

while (i) {
  console.log(i--);             //3,2,1
}


i = 0;
while (++i < 5)
  console.log(i);               //1,2,3,4

i = 0;
while (i++ < 5)
  console.log(i);               //1,2,3,4,5


for (let i = 0; i < 5; i++)
  console.log( i );             //0,1,2,3,4

for (let i = 0; i < 5; ++i)
  console.log( i );             //0,1,2,3,4


for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0)
  console.log( i );
}


i = 0;
while (i < 3) {
  console.log( `number ${i}!` );
  i++;
}


do {
  number = prompt("Enter a number greater than 100"," ");
} while (number <= 100 && number);


n = 10;

outer: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0)
      continue outer;
  }
  console.log(i);
}