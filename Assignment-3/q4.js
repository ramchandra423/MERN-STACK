let n = Number(prompt(`Enter the size of array`))
let arr=[];
for(let i =0;i<n;i++){
    let num= Number(prompt(`Enter ${i} element`))
    arr.push(num);
}
console.log(arr);
function biggest(a){
    let max = a[0];
    for (let i = 1; i < n; i++) {
        if (a[i] > max) {
           max = a[i];
        }
    }
    console.log('Biggest number in the array is:'+max);
}
biggest(arr);