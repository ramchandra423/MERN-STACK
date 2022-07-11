let n = Number(prompt(`Enter the size of array`))
let arr=[];
for(let i =0;i<n;i++){
    let num= Number(prompt(`Enter ${i} element`))
    arr.push(num);
}
console.log(arr);

function avg(a){
    let sum =0;
    let c =0;
    for(let j = 0;j<n;j++){
         if(a[j]<0 ){
         sum +=a[j];
         c =c+1;
        }
    }
    let avg=sum/c;
    console.log(avg);
}
avg(arr);
