function targetTerdekat(arr) {
    // you can only write your code here!
    var positionO = 0;
    var positionX = [];
    for (var i=0; i < arr.length; i++){
        if (arr[i] === "o"){
            positionO = i;
        } else if (arr[i] === "x"){
            positionX.push(i);
        }
    }

    

    if (positionX.length === 0){
        return 0;
    }

    var checkPoint = 0;
    for (var i =0; i< positionX.length; i++){
        var check = 0;
        if (positionO < positionX[i]){
            check = positionX[i] - positionO;
        } else {
            check = positionO - positionX[i];
        }
       

        if (checkPoint === 0){
            checkPoint = check;
        } else {
            if (check < checkPoint){
                checkPoint = check;
            }
        }
    }

    return checkPoint;

    
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2