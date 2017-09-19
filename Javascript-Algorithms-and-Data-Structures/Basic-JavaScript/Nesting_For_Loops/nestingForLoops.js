// BASIC JAVASCRIPT: NESTING FOR LOOPS

/*
  If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
 */
var arr =
[
  [1,2], [3,4], [5,6]
];

for ( var i = 0; i < arr.length; i++ )
{

  for ( var j = 0; j < arr[i].lenght; j++ )

  {
    console.log(arr[i][j]);
  }

}
/*
  This outputs each sub-element in `arr` one at a time. Note that for the inner loop, we are checking the `.length` of `arr[i]`, since `arr[i]` is itself an array.
 */

/*
  Modify function `multiplyAll` so that it multiplies the `product` variable by each number in the sub-arrays of `arr`.
 */

// SOLUTION:
function multiplyAll(arr)
{
  var product = 1;

  for ( var i = 0; i < arr.length; i++ )
  {

    for ( var j = 0; j < arr[i].length; j++ )
    {
      product *= arr[i][j];
    }

  }

  return product;

}
// END SOLUTION

// Tests:
multiplyAll( [ [1, 2], [3, 4], [5, 6, 7] ] );      // 5040
multiplyAll( [ [1], [2], [3] ] );                  // 6
multiplyAll( [ [5, 1], [0.2, 4, 0.5], [3, 9] ] );  // 54
