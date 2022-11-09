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



//median

var arr1 = [2,5,21,11];
var arr2 = [9,3,12,17];
(function (arr1,arr2){
var arr3 = arr1.concat(arr2);
console.log(arr3);
var sort = arr3.sort(function (a,b){return a-b});
console.log(sort);
if(sort.length%2!=0){
    var median = sort[Math.floor(sort.length/2)];
    console.log(median);
}else{
    var median = Math.floor((sort[sort.length/2] + sort[sort.length/2-1])/2);
    console.log(median)
   }
});
(arr1,arr2);


//Return all the palindromes in an array

var palin = ["abcba","java","11211","php"]

(function(str){
    var arr = str.filter((val)=>{
        return val.split("").reverse().join("")===val;
    })
    console.log(arr)
})
(palin);



//Convert all the strings to title caps in a string array
	
(function(str){
    for(let i=0;i<str.length;i++)
    {
        str[i] = str[i][0].toUpperCase()+str[i].slice(1).toLowerCase();
    }
    console.log(str.join(" "));
})
(["this","is","the","reality","accept","it"]);


