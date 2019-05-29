function palindrome(kata){
    var balikKata = kata.split("").reverse().join("");
    if (kata === balikKata){
        return true;
    } else {
        return false;   
    }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // falses