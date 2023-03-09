function checkNumber(arr, n){
    for( let i =0; i < arr.length; i++){
        if(arr[i]==n){
            return true;
        }
    }

    return false;
}
let arr = [1,2,3,4,5];
console.log(checkNumber(arr, 6));

function creatArr(arr, n){
    let ans = [];
    let k = 0;
    for( let i =0; i < arr.length; i++){
        if(arr[i]> n){
            ans[k]=arr[i];
            k++;
        }
    }

    return ans;
}
console.log(creatArr(arr, 5));

function randomHexx(){
    let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','f'];
    let ans ='\#';
    for( let i =0; i < 6; i++){
        let k = Math.floor(Math.random()*16);
        ans+= hex[k];
    }

    return ans;
}
console.log(randomHexx());

function randomRGB(){
    let rgb = [];
    for( let i =0; i < 3; i++){
        rgb[i] = Math.floor(Math.random()*256);
       
    }
    return rgb;
}
console.log(randomRGB());
