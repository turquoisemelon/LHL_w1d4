var numbers = [4, 256, 400, 64, 49];

// // var results = numbers.map(function(num) {
// //   return Math.sqrt(num);
// // });
//
// console.log(results);

function map(arr, callback) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var sqrt = callback(numbers[i]);   // execute callback
    results.push(sqrt);
  }
  return results;
}

console.log(map(numbers, Math.sqrt));
