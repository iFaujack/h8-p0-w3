function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var check = 0;
    for (var i=0; i<arr.length-1; i++){
        var print;
        if  (check === 0){
            check = arr[i+1] - arr[i];
        } else {
            if (check !== arr[i+1] - arr[i]) {
                i = arr.length-1;
                print = false;
            } else {
                print = true;
            }
        } 
    }
    return print;
    
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false