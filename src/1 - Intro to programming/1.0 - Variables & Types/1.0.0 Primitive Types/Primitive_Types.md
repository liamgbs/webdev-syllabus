# Primitive Types

## Literals

First, the easiest bit of javascript to understand. It probably wont even look like code.

Literals are exactly what they sound like, they are just literally a value.

`1` is a literal value of type number (more on that in a bit);

`"Liam"` is a literal.

`true` is a literal.

Basically any hard coded value is a literal. We use them a lot but they will become second nature very quickly.

## Variables

Variables are where we start to see a bit of actual programming. They hold bits of information (data) which we might need to store for use later on. When defining a variable you will either be storing a literal value or deducing a value from one or more existing variables.

## let (=)

```javascript
let x = 1;
```

X is now equal to 1.

But we can do any kind of maths with it, even with other variables.

```javascript
let x = 1+1;

let y = x + 3;
```

we can reassign the variables too;

```javascript
let x = 5 * 10;

x = 10 / 2;
```

## const

A `const` is a bit different to `let`, once you assign a `const`, you cant assign it again.

```javascript
const name = "liam";

// This would error
// (im a comment btw)
liam = "bob"; 
```

If you absolutely know that the data will not change then use a const. There are technical reasons why you would use a const over a let, but thats for later.

## Primitive Types

You probably noticed the **string** in the quotations. It's a *string* of characters so that's the name of it's type.

We also saw the **number** type earlier. There are a few more types which we'll be working with a lot.

There are 7 primitive types:

1. Number
2. String
3. Boolean
4. undefined
5. null
6. Symbol

Everything else is an `object` but we wont go into that right now.

Also we don't care about Symbols because i've never used them or seen them used.

### Numbers

We can have numbers as both decimals and integers (whole numbers).

```javascript
let half = 0.5;

let quarter = 1/4;

let one = 1;

let oneAndThreeQuarters = one + half + quarter;
```

### Strings

String are just strings of characters. You define them by putting them in quote marks or apostrophes.

```javascript
let str1 = "hello, world";
let bum = 'cheeks!';
```

You can **concatenate** strings using `+`. All concatenate meats is join together.

```javascript
let str1 = "hello, world";
let bum = 'cheeks!';

let concat = bum + str1 // cheekshello, world

let concat2 = bum + ' ' + str1 //cheeks hello, world
```

### Boolean

The `boolean` is named after a scientist who made a maths theory for whether things would be true or false. That's all a boolean is or can be: `true`, or `false`.

```javascript
let positive = true;
let negative = false;
```

```javascript
let isPositive = true;

if (isPositive) {
    console.log("I executed :D")
} else {
    console.log("I didnt execute :(")
}
```

### null and undefined

These types are similar but not the same. 

`undefined` means that it is not there at all. Where as `null` means it is there is a non qualatitive state. 

>Think of a phone being switched on or off. If it is on it is `true`, if it's off then `false`. If it is broken then it is `null`, if you never had a phone in the first place then it is `undefined`.

trying to reference variables which havent been set will result in `undefined`.


```javascript
let doesntExist;

console.log(doesntExist); // undefined

const x = null;

console.log(x) // null
```

the null is very rarely relevant and most of the time you mean `undefined`.

## Checking types

Javascript is an example of a **dynamically typed** language. Dynamically types means that we can assign whichever type we like to any variable we like. In a statically types language like Java or C# we have to specify the types:

```java
// This is just an example, you don't need to know any Java.

int myAge = 1; // int (integer) is a number

boolean isAwesome = true;

myAge = false; // THIS ERRORS THE PROGRAM OUT BECAUSE OF BAD TYPES
```

Typescript moves JS back to statically types (kind of) but more on that much later.

Because of how JS stores variables, we can't tell at run time what the type will be **unless it is a primitive**, otherwise the types will always be an object. This is not very informative most of the time.

As a reminder, primitive types are booleans, numbers, strings, undefined and null.

To find the type, we can use the `typeof` operator. It will always produce a result that is a *string type*.

```javascript
console.log(typeof "liam"); // 'string'
console.log(typeof 1); // 'number'
console.log(typeof undefined); // 'undefined'

console.log(typeof "number"); // What will this return?
```

Because of the typing system in JS, `typeof` is rarely useful. However if you ever need to know if something is undefined, or you're expecting either a string or an object then it does come in handy.

## Summary

So, we've covered:

* What literal values are.
* How to create and assign both variables and constants.
* What the 6 primitive types in javascript are.
* How to do basic mathematical operations on your variables or literals.
* String concatenation.
* Type checking with the `typeof` operator.


