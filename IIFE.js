// IIFE function:

// print all the odd numbers in an array:

(function(array){
    for(i=0;i<array.length;i++)
    if(array[i]%2!=0){
        console.log(array[i]);
    }
})
([3,22,5,62,71]);

// sum of all the numbers in the array;
(function(arr){
var total = 0;
for(i=0;i<arr.length;i++){
  total += arr[i]
}
console.log(total)
})
([3,22,5,62,71]);

// prime number 
(function(arr){
  let prime = [];
  arr.forEach((num)=>{
      let factor = 0
      for(let i=0;i<= num;i++){
          if((num % i) === 0){
              factor++
          }
      }
      if(factor ===2){
          prime.push(num)
      }
  })
  console.log(prime)
})
([3,22,5,62,71]);


