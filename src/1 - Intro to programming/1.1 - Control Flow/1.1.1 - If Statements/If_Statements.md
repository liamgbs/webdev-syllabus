# If Statements

Woo! We understand boolean logic now. If at any point you want go further and understand the theory behind it in the form of algebra then check [this site out](https://ryanstutorials.net/boolean-algebra-tutorial/boolean-algebra.php). Not necessary though.

## Simple If

```javascript
    let x = true;

    if (x) {
        console.log("i will execute")
        x = false;
    }

    if (x) {
        console.log("i wont execute")
    }
```

We've seen this before. But note the syntax.

The expression goes in the _parentheses_ `()` and the logic for if the expression is true goes in the curly braces `{}`.

It's important to know that the expression in the parentheses is forced to a boolean state. So there's no need for a double bang with falsy values:

```javascript
    let x = "";

    if (x) {
        console.log("I wont execute because x is falsy")
    }
```

## else

With the `else` keyword, we can do something different when the if condition evaluates to false.

```javascript
    let x = false;

    if (x) {
        console.log("i wont execute")
    } else {
        console.log("but i will")
    }
```

## elseif

Sometimes we might want to do additional checks on a value. So we can use `else if` to do a second check in the same way that we that we did for `if`.

```javascript
    let x = "hello";

    if (x === "bye") {
        console.log('nope')
    } else if (x === "hello") {
        console.log('yep')
    } else {
        console.log('nope')
    }
```

Pretty useful.

Now you might be thinking what is the point in the `else if`? We could have written that code like this:

```javascript
    let x = "hello";

    if (x === "bye") {
        console.log('nope')
    }

    if (x === "hello") {
        console.log('yep')
    } else {
        console.log('nope')
    }
```

and it would have dont the exact same thing. Well aside from the `else if` format being clearer, it's not always quite the same.

Consider this:

```javascript
    let x = "hello";

    if (x === "hello") {
        console.log('yep') // executes
    } 
    
    if (x.length > 3) {
        console.log('oh aye') // executes
    } else {
        console.log('nope') // doesnt exectute
    }
```

In this example, the 'yep' will happen but the 'oh aye' will happen too. But we only wanted the 'yep'. This is why we need the `else if`:

```javascript
    let x = "hello";

    if (x === "hello") {
        console.log('yep') // executes
    } else if (x.length > 3) {
        console.log('oh aye') // doesnt execute
    } else {
        console.log('nope') // doesnt execute
    }
```

## Block scoping

Now is as good a time as any to talk about scopes. The `{}` in code denotes a scope. A scope is just a sort of closed area in which code can execute. This means that we can define variables inside a scope and they will be destroyed at when we're finished with that scope.

Code in an inner scope, has access to variables above it because they are still in that outer scope as well as in the inner.

```javascript
    let outer = true;

    if (outer) {
        let inner = 1;
        console.log(outer) // true
        console.log(inner) // 1
    }

    console.log(inner) // ERROR!
```

The last line errors because the inner variable was defined in the if statement's scope, and was therefore destroyed after the if has stopped executing.

```javascript
    let outer = true;

    console.log(moreInner) // ERROR!

    if (outer) {
        let inner = 1;
        if (inner) {
            let moreInner = "hello";
            outer = "ive changed!"
            console.log(outer) // true
            console.log(inner) // 1
            console.log(moreInner) // 'hello'
        }
    }

    console.log(outer) // 'ive changed!'
```

That's all there is to scopes. You just need to be aware of the way variables are destroyed and are now unavailable when the scope ends. 

> JavaScript is the only language on earth which encourages **global** variables. These are variables that can be accessed from anywhere. They are necessary in JS but the reason they're not normally encouraged is that it makes code very unreadable if you cant see where the variable was defined and therefore cant reason about what it is for. You need to resist the urge to put every variable declaration at the top level. It might seem a good solution to this pesky scope stuff but you'll be killed on the spot if anyone sees you doing that. At the end of the day, they're the ones who will have to read it!

## Ternary Expressions

A ternary expression is a more succinct way of writing if statements:

```javascript
    let x = "hello";

    x === 'hello' ? console.log("yep") : console.log("nope");
```

This is functionally the same as:

```javascript
    let x = "hello"

    if (x === 'hello') {
        console.log("yep")
    } else {
        console.log("nope")
    }
```

Ternary expressions are more brief than an if statement. Some people say stay away from them because they make code less readable. But those people really need to get a clue because one line is easier to read than 5.

You can start nesting them inside each other, which is where it does become unreadable:

```javascript
    let x = "hello";

    x === 'hello' ? console.log("yep") : x.length > 3 ? console.log("oh aye") : console.log("nope")
```

 is functionally the same as

 ```javascript
    let x = "hello";

    if (x === "hello") {
        console.log('yep') // executes

    } else if (x.length > 3) {
        console.log('oh aye') // doesnt execute

    } else {
        console.log('nope') // doesnt execute
    }
```

But is a lot more difficult to read.

> Really, you shouldn't nest ternaries unless theres a good reason but good reasons do exist. Way in the future when we start doing front end stuff with React, you'll see one.

We can also use ternaries to create variables:

```javascript
    let x = true;
    
    let yesOrNo = x ? "yes" : "no";

    console.log(yesOrNo); // 'yes'
```

Which is functionally the same as:

```javascript
    let x = true

    let yesOrNo;

    if (x) {
        yesOrNo = "yes";
    } else {
        yesOrNo = false;
    }

    console.log(yesOrNo); // 'yes'
```

> Quick question. Why do you think I defined the yesOrNo varible where I did. Why didn't I define it when I assigned a value to it?

## switch-case

the switch-case statement is the conditional statement we might need. Sometimes we have one peice of data which could be any number of things and we want to do something different with each of them.

we could do something like this:

```javascript
    let name = "liam"

    if (name === "liam") {
        // do something
    } else if (name === "shenice") {
        // do something else
    } else if (name === "john") {
        // do something completely different
    } else if (name === "bob") {
        // do something unrelated to the others
    }
```

And thats fine, it's even readable. We have another way of writing this though using the switch case:

```javascript
    let name = "liam"

    switch (name) {
        case: "liam":
            //do something
            break;
        case: "shenice":
            //do something else
            break;
        case "john":
            //do something completely different
            break;
        case "bob":
            // do something unrelated to the others
            break;
    }
```

You'll see this form in some places. You're under no obligation to use it but it just tells anyone reading it that there are different paths to take depending on what that data item's value is.

Also notice the `break` in there. The break says that we've found the branch we need to go down and to stop checking. Sometimes your data might satisfy two cases but you want one to take priority over the other. So we need the breaks to stop it doing two things.

## Modulo

The modulo operator `%` has absolutely nothing to do with control flow. But it needs mentioning at some point and you'll need it to do the mean question on the excercise.

Just like the division operators will (gasp) perform a divide between two numbers:

```javascript
    5 / 2 // 2.5
```

The modulo operator gets the remainder. It's as simple as that:

```javascript
    5 % 2 // 1
```

Because 2 goes into 5 with **1** left over. It's used for checking divisibility. A real example would be:

```javascript
    let seconds = 70;

    let secondsSinceLastMinute = 70 % 60;

    console.log(secondsSinceLastMinute) // 10
```

## Summary

So we have if statements on their own:

```javascript
    let x = true;

    if (x) {
        // do something
    }
```

We have ifs with `else if`s:

```javascript
    let x = 1;

    if (x === 0) {
        // do something
    } else if (x === 1) {
        // do something else
    }
```

We have the `else`:

```javascript
    let x = 1;

    if (x === 0) {
        // do something
    } else if (x === 1) {
        // do something else
    } else {
        // do the default action
    }
```

We can express things with ternaries:

```javascript
    let x = 1;

    x === 1 ? doSomething() : doSomethingElse();

    // or

    let isItOne = x === 1 : "yes" : "no"
```

And we can use the switch-case:

```javascript
    let name = "liam"

    switch (name) {
        case: "liam":
            //do something
            break;
        case: "shenice":
            //do something else
            break;
        case "john":
            //do something completely different
            break;
        case "bob":
            // do something unrelated to the others
            break;
    }
```

And of course, the modulo operator.

```javascript
    let x = 11;

    let isDivisibleBy10 = x % 10

    console.log(!!isDivisibleBy10) // false
```

Done! Thats it for conditional flow.










