# Variables

Variables hold bit of information (data) which we might need to store for use later on.

## let (=)

First bit of javascript:

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