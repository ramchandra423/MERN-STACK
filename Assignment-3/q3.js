function prime(x){
    let c =0;
    for(let i=1;i<=x;i++){
        if(x%i ==0){
            c++;
        }
    }
    if(c==2){
        console.log(x);
        return true;
    }
    else{
        return false;
    }
}

let sum =0;
let count=0;
for(i=1;i<100;i++){
    if(prime(i)){
        sum =sum+i;
        count=count+1;
    }
    if(count==10){
        break;
    }
}
console.log('Sum of 10 prime no :'+sum);