function pasanganTerbesar(num) {
    // you can only write your code here!
    var arrayNum = String(num).split("");
    var tempData = 0;

    for (var i =0; i < arrayNum.length; i ++){
      var testNum = Number(arrayNum[i]+arrayNum[i+1])
      if (tempData < testNum ){
        tempData = testNum;
      }
    }
    // console.log(String(num).length)
    return tempData;

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99