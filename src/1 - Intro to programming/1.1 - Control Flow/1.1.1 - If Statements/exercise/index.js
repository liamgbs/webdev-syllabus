let a,b,c,d,e,f;
let g = 1000;
// 0) Check if 1 is truthy, if it is then log it out. If not then do nothing.

if (1) {
    console.log(1);
}

1 ? console.log(1) : undefined


// --------------------------------------------------------------------------
// 1) Check if a is less than 10. If it is then log out "less than ten!"

a = 5;





//------------------------------------------------------------------------
// 2) if b is equal to 10 or b is greater than 20, then add 10 onto the
//    value of b. Otherwise, log out "soz m8".
//
//    Afterwards, log out the value of b;

a = 10;
b = 20;







//--------------------------------------------------------------------------
// 3) If the array d is empty, then make then make the first element "1".

d = []




// --------------------------------------------------------------------------
// 4) Check the type of c.
//
// If it is an object then make A equal to 0
// If it is a number then make A equal to 1
// If it is a string then make A equal to 2 
// 
// Do this without using an if statement.

c = "liam"




//-----------------------------------------------------------------------------
// 5) if liam is awesome but shenice is not, then log out liams age.
//    if shenice is awesome but liam is not, then log out shenices age.
//    if they're both awesome, then log out the sum of their ages.
//    if neither are awesome then log out the difference of their ages

e = {
    liam: {
        isAwesome: true,
        age: 25
    },
    shenice: {
        isAwesome: false,
        age: 23
    }
}

//-------------------------------------------------------------------------------
// 6) Theres a variable G. We don't know what it is, only that it exists.
//    Check if it has an existing value. If it doesn't then make the value 0,
//    if it does then make the value 1.
//
//    Use a ternary expression.









//--------------------------------------------------------------------------------
// 7) the variable 'students' holds information about grades. Show a message based
//    on liams grade. Use a switch case statement, only write console.log once.

// hint: what do we use to hold data for later?

let students = {
    liam: {
        grade: "B"
    }
}





//----------------------------------------------------------------------------------
// 8) Check that f is less than 500. If it is then double it. 
//    
//    do the same again straight after.
//    
//    and again.
//
//    what will f be now?

f = 100;









// -------------------------------------------------------------------------------
// 9) Now for the mean question:

//     Leap years happen every 4 years. A given year is a leap year if:
//
//     > The year can be evenly divided by 4
//     > AND not divisable by 100
//     > UNLESS it is divisible by 400
// 
//     Remember you can divide using the % operator to check divisibility.
//     
//     Check to see if year is a leap year. If it is then log out "leap"
//     otherwise log out "no leap".

let year = 2016

























































































































































































let divisibleBy4 = year % 4 === 0;
let divisibleBy100 = year % 100 === 0
let divisibleBy400 = year % 400 === 0

if (divisibleBy4 && (!divisibleBy100 || divisibleBy400)) {
    console.log("leap");
} else {
    console.log("no leap")
}

