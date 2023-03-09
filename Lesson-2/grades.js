const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

function show(grade){
    console.log(grade.name + ' - '+ grade.grade + ' - '+ grade.sex);
}
console.log('---------1-----------');
let sum =0;
for(let i =0; i< grades.length; i++){
    sum+=grades[i].grade;
}
console.log(`Trung bình: ${sum/grades.length}`);

console.log('---------2-----------');
sum =0;
let count =0;
for(let i =0; i< grades.length; i++){
    if(grades[i].sex =='M'){
        sum+=grades[i].grade;
        count++;
    }
}
console.log(`Trung bình nam: ${sum/count}`);

console.log('---------3-----------');
sum =0;
count = 0;

for(let i = 0; i< grades.length; i++){
    if(grades[i].sex =='F'){
        sum+=grades[i].grade;
        count++;
    }
}
console.log(`Trung bình nữ: ${sum/count}`);

console.log('---------4-----------');
grades.sort(function(a,b){
    return b.grade - a.grade;
});

for(let i =0; i< grades.length; i++){
    if(grades[i].sex =='M'){
        show(grades[i]);
        break;
       
    }
}
console.log('---------5-----------');
for(let i =0; i< grades.length; i++){
    if(grades[i].sex =='F'){
        show(grades[i]);
        break;
       
    }
}
console.log('---------6-----------');
for(let i = grades.length -1 ; i >0; i--){
    if(grades[i].sex =='M'){
        show(grades[i]);
        break;
       
    }
}
console.log('---------7-----------');
for(let i = grades.length -1 ; i >0; i--){
    if(grades[i].sex =='F'){
        show(grades[i]);
        break;
       
    }
}
console.log('---------8-----------');
show(grades[0]);
console.log('---------9-----------');
show(grades[grades.length-1]);
console.log('---------10-----------');
for(let i =0; i< grades.length; i++){
    if(grades[i].sex =='F'){
        show(grades[i]);
             
    }
}
console.log('---------11-----------');
grades.sort(function(a,b){
    return a.name.localeCompare(b.name);
});
for(let i =0; i< grades.length; i++){
    show(grades[i]);
}

console.log('---------12-----------');
grades.sort(function(a,b){
    return b.grade - a.grade;
});

for(let i =0; i< grades.length; i++){
    show(grades[i]);
}

console.log('---------13-----------');
for(let i =0; i< grades.length; i++){
    if(grades[i].sex =='F'&& grades[i].name.charAt(0).toLowerCase()=='j'){
        show(grades[i]);
    }
}
console.log('---------14-----------');
for(let i =0; i< 5; i++){
    show(grades[i]);
}