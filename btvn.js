function calculateFactorial(a){
    let sum=1;
    for (let i =1; i <=a; i++){
        sum*=i;
    }
    console.log(sum);
}
function reverseString(s){
    let str = new String(s);
    let a ="";
    for(let i = str.length -1 ; i>=0; i--){
        a+=str[i];
    }
    console.log(a);
}

function translate(s){
    switch(s){
        case 'VN':{
            console.log("Xin chào");
            break;
        }
        case 'EN':{
            console.log("Hello");
            break;
        }
        default:{
            break;
        }
    }
}
function subString(s){
    let str = new String(s);
    let a ="";
    for(let i = 0 ; i< 10; i++){
        a+=str[i];
    }
    a+="...";
    console.log(a);
}
calculateFactorial(5);
translate('VN');
reverseString('hello');
subString('xinchaocacbandenvoiTechmaster')