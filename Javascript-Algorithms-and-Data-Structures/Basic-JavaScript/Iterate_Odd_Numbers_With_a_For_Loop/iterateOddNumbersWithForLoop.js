// BASIC JAVASCRIPT: ITERATE ODD NUMBERS WITH A FOR LOOP

/*
  For loops don't have to iterate one at a time. By changing our `final-expression`, we can count by even numbers.

  We'll start at `i = 0` and loop while `i < 10`. We'll increment `i` by 2 each loop with `i += 2`.
 */

// EXAMPLE:
var ourArray = [];
for ( var i = 0; i < 10; i += 2 )
{
  ourArray.push(i);
}
// ourArray = [0,2,4,6,8]
// END EXAMPLE

// Let's change our `initialization` so we can count by odd numbers.

// Push the odd numbers from 1 through 9 to 'myArray' using a 'for' loop.

// SOLUTION:
var myArray = [];
for ( var i = 1; i <= 9; i += 2 )
{
  myArray.push(i);
}
// myArray = [1,3,5,7,9]
// END SOLUTION

// TESTS NEEDED TO MEET:
// myArray = [1,3,5,7,9]
// You should be using a `for` loop for this.
