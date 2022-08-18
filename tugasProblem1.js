function compare(a, b) {
  let hasil = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      hasil += a[i];
    }
  }
  return hasil;
}

console.log(compare("AKA", "AKASHI")); // AKA
console.log(compare("KANGOORO", "KANG")); // KANG
console.log(compare("KI", "KIJANG")); // KI
console.log(compare("KUPU-KUPU", "KUPU")); // KUPU
console.log(compare("ILALANG", "ILA")); // ILA
