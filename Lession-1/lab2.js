function lession1(mark){
    if(mark>=85){
        console.log("A");
    }else if(mark>=75){
        console.log("B");
    }else if(mark>=40){
        console.log("C");
    }else {
        console.log("D");
    }

}

function lession2(a , b){
    if(a > b){
        console.log(a);
    }else {
        console.log(b);
    }

}

function lession3(a){
    if(a>0){
        console.log("Số dương");
    }else if (a<0){
        console.log("Số âm");
    }else {
        console.log("Số 0");
    }

}
function lession4(a){
    if(a%2==0){
        console.log("Số chẵn");
    }else {
        console.log("Số lẻ");
    }

}

function lession5(a){
    if(a%15==0){
        console.log("Số đồng thời chia hết cho 3 và 5");
    }else {
        console.log("Số không đồng thời chia hết cho 3 và 5");
    }

}
function lession6(a, b, c){
    if((a + b)==c){
        console.log("c có bằng a + b");
    }else {
        console.log("c không bằng a + b");
    }

}
lession6(1,3,4);