function arrayUnique(arrayA, arrayB) {
  // your code here
  let hasil = [];
  for (let i = 0; i < arrayA.length; i++) {
    let kembar = 0;
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] == arrayB[j]) {
        kembar += 1;
      }
    }

    if (kembar == 0) {
      hasil.push(arrayA[i]);
    }
  }

  return hasil;
}

console.log(arrayUnique([1, 2, 3, 4], [1, 3, 5, 10, 16])); // [2 4]
console.log(arrayUnique([10, 20, 30, 40], [5, 10, 15, 59])); // [20 30 40]
console.log(arrayUnique([1, 3, 7], [1, 3, 5])); // [7]
console.log(arrayUnique([3, 8], [2, 8])); // [3]
console.log(arrayUnique([1, 2, 3], [3, 2, 1])); // []
