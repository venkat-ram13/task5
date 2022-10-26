// Annonymnous function:

// sum of numbers in an array:


var array = [5,8,23,645,5,54];
var sum = function(array){
    var total = 0;
    for( let i=0; i<array.length; i++ ){
        total +=array[i];
    }
    console.log((total));
}
sum(array);


// print all the odd numbers in an array:

var oddNum = function(array){
    for(i=0;i<array.length;i++)
    if(array[i]%2!=0){
        console.log(array[i]);
    }
}
oddNum([3,22,5,62,71]);

// rotate the array k times:

const rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  };
  console.log(rotate([1,2,3,4,5,6,7],3));

  //remove duplicates:

  let array1 = ["php","java","javascript","php","css","java","html"];
  let unique = function(arr){
    let unique = [];
    arr.forEach((value)=>{
    if(!unique.includes(value)){
        unique.push(value)
    }
    })
    return unique;
  };
  console.log(unique(array1));

// prime numbers:

  let prime = [23,33,2,57,69]
  let findPrime = function(arr){
    let prime = [];
    arr.forEach((num)=>{
        let factor =0;
        for(let i=0;i<= num;i++){
            if((num%i) === 0){
                factor++
            }
        }
        if(factor ===2){
            prime.push(num);
        }
    })
    return prime;
  }
  console.log(findPrime(prime));


  

  
