/ Arrow function:

// sum of numbers in an array:


var array = [5,8,23,64,17,54];
var sum = (array)=>{
    var total = 0;
    for( let i=0; i<array.length; i++ ){
        total +=array[i];
    }
    console.log((total));
};
sum(array);


// print all the odd numbers in an array:

var oddNum = (array)=>{
    for(i=0;i<array.length;i++)
    if(array[i]%2!=0){
        console.log(array[i]);
    }
}
oddNum(array);

// prime number

let prime = [23,33,2,57,69]
  let findPrime = (arr)=>{
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
    console.log(prime);
  }
findPrime(prime);


//median

let arr1 = [2,5,21,11];
let arr2 = [9,3,12,17];
let median=(arr1,arr2)=>{
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
};
median(arr1,arr2);


//Return all the palindromes in an array
var palin = ["abcba","java","11211","php",]

var palindrome = (str)=>{
    var arr = str.filter((val)=>{
        return val.split("").reverse().join("")===val;
    })
    console.log(arr)
}

palindrome(palin);



//Convert all the strings to title caps in a string array
	
let titlecase = (str)=>{
    for(let i=0;i<str.length;i++)
    {
        str[i] = str[i][0].toUpperCase()+str[i].slice(1).toLowerCase();
    }
    console.log(str.join(" "));
}
titlecase(["this","is","the","reality","accept","it"]);
