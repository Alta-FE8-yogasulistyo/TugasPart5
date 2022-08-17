function caesar(offset, input) {
  // your code here
  let solved = "";
  for (let i = 0; i < input.length; i++) {
    let asciiNum = input[i].charCodeAt();
    if (asciiNum >= 97 && asciiNum <= 122) {
      solved += String.fromCharCode(asciiNum + offset);
    }
  }

  return solved;
}
console.log(caesar(3, "abc")); // def
console.log(caesar(2, "alta")); // cnvc
console.log(caesar(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesar(1, "abcdefghijklmnopqrstuvwxyz"));
// bcdefghijklmnopqrstuvwxyza
console.log(caesar(1000, "abcdefghijklmnopqrstuvwxyz"));
// mnopqrstuvwxyzabcdefghijkl
