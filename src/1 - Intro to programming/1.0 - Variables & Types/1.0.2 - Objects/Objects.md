# Objects.

# JavaScript Objects

JS objects are the most powerful structure you'll work with. They can hold any data type as a key-value pair.

> A key-value pair just means if I store data at a given key, then I'm able to access that data again using that key. Keys are just variable names really. 

```javascript
let myObject = {
    key: "value",
    imANumber: 1,
    booleanOverHere: false,
    weCanHaveAnyType: [1,2,3,4,5],
    omgAFunction: function() {
        console.log("I'm a function!")
    }
}

console.log(myObject.booleanOverHere) // false
console.log(myObject.imANumber) // 1
```

With an array we would access the data with an index: `myArr[1]`.

With an object, we usually access properties with a dot notation like this: `myObject.property`. This is called **static access**.

We can access an objects properties dynamically though in the same way we would access an array's elements; but instead we use the key.

```javascript
let myObject = {
    myKey = "myValue"
}

console.log(myObject["myKey"]) // "myValue"
```

## JSON

JSON (JavaScript Object Notation) is one of many standard formats used to send data over a network. Using JSON, You can **serialise** data so that when it is read by the recieving end, it can be read back into computer memory just as it was when it was sent.

JavaScript objects are not the same as JSON; they are similar to read but are incompatible.

You can convert all JSON to an Object, but you can only convert a subset of Objects to JSON. This is because some which can be held by objects are not serialisable.