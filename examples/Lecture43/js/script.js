// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");
//output 'hello world!'



// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1(a) {
  console.log(a / 5);
}
test1();

/* So when you debug your code and you call a function,
 and somewhere inside the function, something starts 
 throwing not a number. Chances are that there's something 
 that was supposed to be passed in into that function, 
 and either not neglected to be passed in or something 
 happened to it along the way right before it was supposed to 
 be passed in, and then you have an undefined variable inside your function.
  NaN - not an number 
 */




// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}





// ***** Strict equality
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
    .log("Strict: x='4' is NOT equal to y=4");
}






// ***** If statement (all false)
if (false || null ||
  undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}





// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() {
  return
  {
    name: "Yaakov"
  };
}

function b() {
  return {
    name: "Yaakov"
  };
}

console.log(a());
console.log(b());


// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);



