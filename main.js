// 1. What is a function?
// function is reusable set of code, which we can re use everytime we need 

// 2. What is a function call?
// function call is when we call a fuction to activate and do what we wrote inside function. 

// 3. What is a code block, and how does it relate to a function?
// code block is inside these symbols {}  and is function body, basically its part which has all necessary actions function should perform.

// 4. Create a function that takes a string as an argument and greets the user. For example, if the function is called with "John," the function should return "Hello, John!"

let name1 = "john";
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet(name1)); 


// 5. Create a function that takes a string as an argument and returns a string with the argument value in reverse. For example, if the function is called with the input "hello," the function should return "olleh." (Use a loop, not a method that does this in one step.)

function reverses(str) {
    let newStr = '';
    let iteration = str.length
    for (let i = 0; i < iteration; i++) {
        newStr = newStr + str[str.length - 1]
        str = str.slice(0, -1); 
        
    }
    return newStr;
}

console.log(reverses("abc"));


// 6. What is a default argument, and how does it work?
// default argumen is the begginig value for parameters if it not supplied, if it is supplied then default value is changed 


// 7. What is the scope and lifetime of a variable?
// variables exist only in scope it is created, if it is created in function it can be used only in function. outside of function it can not be referred.


// 8. What is a return value?
// return value is the end result of the function.


// 9. What is the return value of a function that does not have a return statement?
// undefined 


// 10. Given the following function, find mistakes in the code and explain what the function is supposed to do:
//     ```javascript
    function foo1(x) {
        return x * 2;     // function should be multiplying a number by 2 and return a value, but this function is not returning the value

    }
    
    let x1 = 7;
    x1 = foo1(x1);
    console.log(x1);
//     ```


// 11. Given the following code, find and correct the mistake in the code:
//     ```javascript
    function bar(x) {
        x = x + 1;
        return x;
    }

    function foo2(x) {
        x = bar(x);
        x *= 2;
        return x;
    }
    
    let x2 = 7;
    x2 = foo2(x2);
    console.log(x2); // x should change!
//     ```


// 12. Given the following function, what is the return value of the function call `foo(2)`? Explain your answer.
//     ```javascript

    function foo3(x) {
        if (x > 5) {
            return x;
        } else {
            return x + foo3(x + 1);
        }
    }

    console.log(foo3(2))
        // it will compare 2 to 5 and as it is not more then five it will perform else command, which is to add 2 to the result of foo3(x + 1), this will call foo3 function again with x meaning of 3 and as 3 is not more the 5 it will perform else function and go in deeper level where x becomes 4 and then againg 5 and then 6, once it will be sic last level foo function will return 6 then it will be added to x which will be 5 on thet level and it will become 11 and will be returned to the upper level wher x = 4, wil become 15 then next level then will be added 3, then 2 then 1 and it will return 20 at the end, or if x is more than 5 from the beggining it will only return that number directly.
    // 
//     ```


// 13. Create a function that takes an array of numbers as an argument and returns the sum of the odd numbers in the array. (Use a loop, not a method that does this in one step.)
function addOdds(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum
}

let array1 = [1, 2, 3, 4, 5, 6, 7]
console.log(addOdds(array1))


// 14. Create a function that takes a string as an argument and returns a boolean, true if string is a palindrome else false. A palindrome is a word that reads the same backward as forward. For example, if the function is called with `"hello"` it should return `false`, if the function receives `"elle"` it should return `true`, because `elle` backwards is also `elle`.
function strintToBoolean(str) {
    if (str === reverses(str)) {
        return true
    } else {
        return false
    }
}

console.log(strintToBoolean('elle'))