
// Annonymnous function:

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
  

  
