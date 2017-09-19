// BASIC JAVASCRIPT: ITERATE WITH JAVASCRIPT WHILE LOOPS

/*
  You can run the same code multiple times by using a loop.

  The first type of loop we will learn is called a `while` loop because it runs "while" a specified condition is true and stops once that condition is no longer true.
 */

// EXAMPLE:
var ourArray = [];
var i = 0;
while( i < 5 )
{
  ourArray.push(i);
  i++;
}
// END

// Push the numbers 0 through 4 to myArray using a while loop.

// SOLUTION:
var myArray = [];
var i = 0;
while( i <= 4)
{
  myArray.push(i);
  i++;
}
// End

// TESTS NEEDED TO MEET:
// myArray = [0,1,2,3,4]
// You should be using a `while` loop for this.
