# Arrays

What if we want to hold a collection of data? We could do:

```javascript
let data1 = 10;
let data2 = 19;
let data3 = 129;
let data4 = 102;
let data5 = 404;
```

But then what if we had a million bits of data? It would get really hard to work with. So we have an **array** to hold data.

```javascript
let data = [10, 19, 129, 102, 404];

let empty = [];
```

Arrays give us the ability to hold lots of pieces of data all in one place (one variable). They also give us tools to do useful, and sometimes complex things that we would have otherwise had to do ourselves. For example, we can sort arrays, search them, remove duplicates etc.
These things can be done by calling **functions** on an array, which we'll do a bit of later on in this page.

> Actually, different types have different functions you can call to do stuff. With `"strings"` for example, you can make all characters upper case (capitalised) or search for substrings.

## Data Access

We can access each bit of data by it's index in the array (from left to right). **Be aware that things in programming tend to start from 0**, this includes arrays.

```javascript
let data = [10, 19, 129, 102, 404];

const empty = [];

data[0] // 10
data[4] // 404
data[10] // undefined
```

## Assignment

We can assign to the array in the same way that we assign to a regular variable:

```javascript
let data = [10, 19, 129, 102, 404];

data[2] = 0;

data[5] = "Hello!";

console.log(data); // [0, 19, 129, 102, 404, "Hello!"]
```

> Note that we can mix and match types in out array, for example I just put a string in an array full of numbers. This is sometimes a bad idea because it becomes harder to work with the contents.

## Intro to objects

We'll do more on objects in the next bit, but heres a primer. An **object** is a special type. An array is a type of object, but isn't actually an object... (very confusing but dont worry about it). So if you say:

```javascript
let data = [10, 19, 129, 102, 404];

console.log(typeof data) // "object"
```

It will evaluate to `"object"` but a JavaScript object is written like:

```javascript
let obj = {
    key: "value",
    key2: 1
}
```

and has keys and values instead of indices.

## Functions

As mentioned previously, the Array type has utility functions attached to it. **you dont need to know all the functions by heart, you only need to know how to call them and google for them.**

[Click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods) for a list of all methods you can call but here are a few.

## `Array.sort()`

Exactly how it sounds, just sorts the array in order

```javascript
let arr = [5, 3, 1, 2, 4];

arr.sort();

console.log(arr); // [1,2,3,4,5]
```

## `Array.includes(argument)`

Returns true if the argument is in the array.

```javascript
let arr = [5, 3, 1, 2, 4];

const exists = arr.includes(3);
const doesntExist = arr.includes("foo")

console.log(exists) // true
console.log(doesntExist) // false
```

## `Array.flat()`

Any arrays within an array and so on will be flattened into one array.

```javascript
let arr = [5, [2, 3, 4], 1, [1, 2, 3], 4];

arr = arr.flat()

console.log(arr) // [5, 2, 3, 4, 1, 1, 2, 3, 4]
```

Theres loads more but i wont list them all here, look at the docs at some point.


## Iteration

The real power of arrays come from the fact that they are **iterable**. This means that you can loop over them. This is getting ahead of ourselves a bit but consider the following:


```javascript
const array = ["first", "second", "third"]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
```

Look at the `for` line. Here, we are saying:

1. Set a variable called `i` 
2. Only execute the code in the `{ }` whilst `i` is less than the length of the array.
3. After each loop, make `i` equal to itself plus one.

In the body of the loop, we are using `i` to access the array without having to write the `console.log` 3 times.

We will cover the `for` and `while` loops in a few sections. Bear in mind that in modern JavaScript we rarely write for loops this way. However they are still relevant and at this stage, much easier to understand.





