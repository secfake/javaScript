let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
function show(products){
    for(let i= 0; i < products.length; i++){
        console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }
}
show(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
console.log('---------2-----------');
let sum =0;
for(let i= 0; i < products.length; i++){
    sum+= products[i]['price']*products[i]['count'];
};
console.log(`Tổng tiền: ${sum}`);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
console.log('---------3-----------');
for(let i= 0; i < products.length; i++){
    if(products[i]['brand'] =='Apple'){
        console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }

}

// 4. Tìm các sản phẩm có giá > 20000000
console.log('---------4-----------');
for(let i= 0; i < products.length; i++){
    if(products[i]['price'] > 20000000){
        console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }

}

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
console.log('---------5-----------');
for(let i= 0; i < products.length; i++){
    if(products[i].name.toLowerCase().includes('pro')){
        console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }

}

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
console.log('---------6-----------');
let ip =  {
    name: "Iphone 14 ",
    price: 30000000,
    brand: "Apple",
    count: 3,
}
products.push(ip);
show(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
console.log('---------7-----------');
for(let i= 0; i < products.length; i++){
    if(products[i]['brand'] =='Samsung'){
        products.splice(i,i);
    }

}
show(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
console.log('---------8-----------');
products.sort(function(a, b){
    return a.price - b.price;
});
show(products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
console.log('---------9-----------');
products.sort(function(a, b){
    return b.count - a.count;
});
show(products);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
console.log('---------10-----------');
function random(products){
    let k = products.length;
    let i = Math.floor(Math.random()*k);
    let j = Math.floor(Math.random()*k);
    while (i==j) {
        j = Math.floor(Math.random()*k);
    }
    console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    console.log(`${products[j]['name']} - ${products[j]['price']} - ${products[j]['brand']} - ${products[j]['count']}`);
}
random(products);