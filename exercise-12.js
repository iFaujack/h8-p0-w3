function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var check = 0;
    for (var i=0; i<arr.length-1; i++){
        var print;
        if  (check === 0){
            check = arr[i+1] / arr[i];
        } else {
            if (check !== arr[i+1] / arr[i]) {
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
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false