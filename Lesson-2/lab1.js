
let arr = [4,2,5,6,2,7] ;

function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));
function findMin(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin(arr));


function changArr(arr){
    for (let i = 0; i < arr.length; i++) {
       arr[i]%=2;
    }
    return arr;
}
console.log(changArr(arr));

function repeatString(s){
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i]= s;
     }
     return arr;
}
console.log(repeatString('a'));

function repeatString5(s){
    let arr = [];
    arr[0]=s;
    for (let i = 1; i < 10; i++) {
        arr[i]= '-'+ s;
     }
     return arr;
}
console.log(repeatString5('a'));
