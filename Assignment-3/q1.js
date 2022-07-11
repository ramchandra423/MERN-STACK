let n = Number(prompt(`Enter the size of array :`))
let arr=[];
for(let i =0;i<n;i++){
    let num= Number(prompt(`Enter ${i} element`))
    arr.push(num);
}
console.log(arr);
let sum =0;
for(let j = 0;j<n;j++){
    if(arr[j] >0 && arr[j]%2==0 && arr[j]%3 ==0 ){
        sum +=arr[j];
    }
}
console.log('sum of elements are:'+sum);
