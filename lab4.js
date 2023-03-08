function lession1(a){
    let s=a;
    for(let i = 1; i < 10; i++){
        s+=a;
    }
    console.log(s);
}
function lession2(a){
    let s=a;
    for(let i = 1; i < 10; i++){
        s+="-"+a;
    }
    console.log(s);
}
function lession3(a, n){
    if(n<=0){
        return;
    }
    let s=a;
    for(let i = 1; i < n; i++){
        s+="-"+a;
    }
    console.log(s);
}
function lession4(){
    let sum=0;
    for(let i = 0; i <= 100; i= i+5){
        sum+=i;
    }
    console.log(sum);
}
function lession5(r){
        console.log(Math.PI*r*r*r*4/3);
}
function lession6(a, b){
    let min =a;
    let max =b;
    if(a>b){
        min=b;
        max=a;
    }
    let sum=0;
    for(let i = min+1; i < max ; i++){
        sum+=i;
    }
    console.log(sum);
}
function lession7(a){
    if(a<2){
        return false;
    }
    for(let i = 2; i < a ; i++){
        if(a%i==0){
            return false;
        }
    }
    return true;
}
function lession8(a){
    let sum = 0;
    for(let i = 1; i <= a ; i++){
        if(lession7(i)){
           sum +=i;
        }
    }
    console.log(sum);
}
function lession9(a){
    let sum = 0;
    for(let i = 1; i <= a ; i++){
        if(a%i==0){
           sum +=i;
        }
    }
    console.log(sum);
}
lession3('a', 5);
lession6(3,8);
lession6(8,3);
console.log(lession7(9));
lession8(5);
lession9(5);