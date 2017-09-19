// BASIC JAVASCRIPT: COUNT BACKWARDS WITH A FOR LOOP

/*
  A for loop can also count backwards, so long as we can define the right conditions.

  In order to count backwards by twos, we'll need to change our `initialization`, `condition`, and `final-expression`.

  We'll start at `i = 10` and loop while `i > 0`. We'll decrement `i` by 2 each loop with `i -= 2`.
 */

// EXAMPLE:
var ourArray = [];
for ( var i = 10; i > 0; i -= 2 )
{
  ourArray.push(i);
}
// ourArray = [10,8,6,4,2]
// END EXAMPLE

// Let's change our `initialization` and `final-expression` so we can count backward by twos by odd numbers.

// Push the odd numbers from 9 through 1 to `myArray` using a `for` loop.

// SOLUTION:
var myArray = [];
for ( var i = 9; i >= 1; i -= 2 )
{
  myArray.push(i);
}
// myArray = [9,7,5,3,1]
// END SOLUTION

// TESTS NEEDED TO MEET:
// myArray = [9,7,5,3,1]
// You should be using the array method `push`.
// You should be using a `for` loop for this.
