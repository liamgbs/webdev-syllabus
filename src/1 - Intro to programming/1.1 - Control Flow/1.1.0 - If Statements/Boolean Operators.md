# If Statements

Now onto the interesting stuff. This is where you can make your programs make decisions based on **boolean** conditions. So, if true then do this, otherwise do that.

So to start with:

```javascript
let myBoolean = true;

if (myBoolean === true) {
    console.log("it was true");
} else {
    console.log("it was false");
}
```

You may have noticed the equality operator. A triple equals `===` means compare both sides and if they are correct then return `true`.

```javascript
console.log(true === true) // true
console.log(true === false) // false
console.log(1 === 1) // true
console.log(10 === 5 + 5) // true
```

Full disclosure. This will be a big section, we need to cover other boolean operators and logical operators (I will explain these terms with examples).

## Boolean operators

### and operator `&&`

So we've seen that we can make descisions based on boolean values. But what if the condition is more complex? Consider the following:

```javascript
let d = "derp";
let h = "herp";
```

We want to do something if d is equal to `derp` AND h is equal to `herp`.

How do we express that?

Well we can use the `&&` operator. All this means is **and**. You can remember that because the ampersand means and in english.

```javascript
let d = "derp";
let h = "herp";

console.log(d === "derp" && h === "herp"); // true
```

So, we can then say:

```javascript
let d = "derp";
let h = "herp";

if (d === "derp" && h === "herp") {
    console.log("d is derp AND h is herp")
} else {
    console.log("oops, either d is not derp or h is not herp");
}
```

This is important. Because it's an AND. Both sides of the `&&` must be true for the whole expression to resolve to true.

```javascript
let d = "derp";
let h = "notherp";

console.log(d === "derp" && h === "herp"); // false
```

But sometimes you may just be happy enough with one of the conditions being true. Enter the or operator.

### or operator `||`

If you can understand the `&&`, then the `||` isnt too much of a stretch. 

```javascript
let d = "derp";
let h = "notherp";

console.log(d === "derp" || h === "herp"); // true
```

Repeating myself but, with the or operator. Only one side of the expression needs to be true for the whole thing to resolve to true.

```javascript
let x = 1
let y = 2

console.log(x === 0 || y === 0); // false
```

### not operator `!`

The final boolean operator we can use is the not operator. 

```javascript
console.log(!true); // false
console.log(!false); // true

console.log(!(1===1)); // false (note the brackets)

```

This is arguably the simplest to understand but can be fickle. In the same way double negatives in english can be a mind fuck, that goes doubly so in programming:

```javascript
let x = 1;
let y = 2;

if (!(x !== y)) {
    console.log("oh my god thats hard to read")
} else {
    console.log("never write an expression like that")
}

```

That was hard to read wasnt it? It's an example of what not to do. Theres formal algebra