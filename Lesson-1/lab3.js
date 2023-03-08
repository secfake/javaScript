function lession1(day){
    switch(day){
        case 0:{
            console.log("Hôm nay là chủ nhật");
            break;
        }
        case 1:{
            console.log("Hôm nay là thứ 2");
            break;
        }
        case 2:{
            console.log("Hôm nay là thứ 3");
            break;
        }
        case 3:{
            console.log("Hôm nay là thứ 4");
            break;
        }
        case 4:{
            console.log("Hôm nay là thứ 5");
            break;
        }
        case 5:{
            console.log("Hôm nay là thứ 6");
            break;
        }
        case 6:{
            console.log("Hôm nay là thứ 7");
            break;
        }
    }
}
function lession2(month){
    switch(month){
        case 1:
        case 2:
        case 3:{
            console.log("Mùa xuân");
            break;
        }
        case 4:
        case 5:
        case 6:{
            console.log("Mùa hè");
            break;
        }
        case 7:
        case 8:
        case 9:{
            console.log("Mùa thu");
            break;
        }
        case 10:
        case 11:
        case 12:{
            console.log("Mùa đông");
            break;
        }
     
    }
}

lession1(6);
lession2(11);