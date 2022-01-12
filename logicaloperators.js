console.log( null || 2 || undefined );              // 2


console.log( alert(1) || 2 || alert(3) );           // 2


console.log( 1 && null && 2 );                      //null


console.log( alert(1) && alert(2) );               // undefined


console.log( null || 2 && 3 || 4 );                //3


//if (age >= 14 && age <= 90)


//if (!(age >= 14 && age <= 90))
//if (age < 14 || age > 90)


if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


let userLogin = prompt("Enter who you are","");
if(userLogin==='admin')
{
    let password = prompt("Enter the password","");
    if(password === 'TheMaster') 
        console.log("Welcome");
    else if(password==='' || password==null) 
        console.log("Canceled");
    else
        console.log("Wrong password");
}
else if(userLogin==='' || userLogin==null)
    console.log("Canceled");
else
    console.log("I don’t know you");