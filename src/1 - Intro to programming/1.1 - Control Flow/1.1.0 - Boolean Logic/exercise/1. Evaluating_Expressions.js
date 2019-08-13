const test = (q, expr, ans) => {
    if (ans === undefined || !q) return;
    console.log(
        `Question ${q} was ${expr === ans ? 'Correct!' : `Incorrect, the correct answer was ${expr}`}`
    )
}

let a, b, c, expression, answer;


/* 

Ignore the above, thats just a little utility to test the answers.

Sorry but this one is gonna be a bit tougher than just logging
some stuff out. This stuff can be mind fucky and you need to be
able to reason about it. A correct answer is good, but I'm also
gonna need you to explain it to me.

*/

// 0) What will the following expression resolve to? Example question

a = true;
b = false;

expression = true || false

answer = true;

test(0, expression, answer)

// 1) What will the following expression resolve to?

a = true;
b = false;

expression = a && b

answer = undefined;

test(1, expression, answer)

// 2) Same question

a = false;
b = false;

expression = a || b;

answer = undefined;

test(2, expression, answer)

// 3) And again

a = true;
b = false;

expression = !a || b;

answer = undefined;

test(3, expression, answer)

// 4) You get the idea

a = false;
b = true;

expression = !(a && b)

answer = undefined;

test(4, expression, answer)


// 5)

a = false;
b = true;
c = true;

expression = !(a && b && c);

answer = undefined;

test(5, expression, answer);

// 6)

a = 1;
b = 2;

expression = b < a;

answer = undefined;

test(6, expression, answer);


// 7)

a = 1000;
b = 1000;
c = "hello"

expression = a >= b && c !== 'hello'

answer = undefined;

test(7, expression, answer)

// 8) 

// Hint: remember the truthy and falsy versions of the primitive types?

a = 0;
b = 1;
c = "";

expression = !!a || !!b && !!c;

answer = undefined;

test(8, expression, answer)

// 9)

a = {
    myAge: 25
}

b = [0, 10, 30, 3]

c = false;

expression = a.myAge < b[3] || c

answer = undefined;

test(9, expression, answer)

// 10)

// This is really really mean. Anyone who writes code like this is an idiot
// but see if you can work it out.

// Hint, remember precedence and use brackets to make it easier to read.

a = 20
b = 10
c = null

expression = a < b + 10 && !(b === 10) || !!c === !!(20 - a)

// Use this to simplify it for yourself, if you want
// expression = a < b + 10 && !(b === 10) || !!c === !!(20 - a)

answer = undefined;

test(10, expression, answer)
