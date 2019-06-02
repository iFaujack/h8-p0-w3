function groupAnimals(animals) {
    // you can only write your code here!
    var print = [];
    animals = animals.sort();
    for (var i=0; i < animals.length; i++){
        charCode =  animals[i].charCodeAt(0);
        // console.log(charCode);
        index = charCode - 97;
        
        if (print[index] != null){
            print[index].push(animals[i])
        } else {
            print[index] =[];
            print[index].push(animals[i])
        }
        
    }
    
    var print = print.filter(function (el){
        return el != null;
    } )
    return print;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]