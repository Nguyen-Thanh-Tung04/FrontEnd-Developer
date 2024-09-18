const products = [
    {
        name: "but chi",
        price: 50000,
        quantity: 100,
        color: ["red", "green", "blue"],
    },
    {
        name: "Ip 15",
        price: 1000000,
        quantity: 10,
        color: ["red", "green", "blue"],
    },
    {
        name: "áo khoác",
        price: 60000,
        quantity: 80,
        color: ["red", "green", "yellow"],
    }
];

// Câu 1: Sử dụng forEach để in tên sản phẩm có số lượng ít hơn 50
console.log("Câu 1:");
products.forEach(product => {
    if (product.quantity < 50) {
        console.log(product.name);
    }
});

// Câu 2: Sử dụng map để tạo một mảng mới chứa thông tin sản phẩm có màu "green"
console.log("Câu 2:");
const greenProducts = products
    .filter(product => product.color.includes("green"))
    .map(product => ({ name: product.name, price: product.price }));
console.log(greenProducts);

// Câu 3: Sử dụng filter để lọc ra sản phẩm có giá trên 100000 và số lượng dưới 50
console.log("Câu 3:");
const expensiveLowQuantityProducts = products.filter(product => product.price > 100000 && product.quantity < 50);
console.log(expensiveLowQuantityProducts);

// Câu 4: Sử dụng find để tìm sản phẩm có màu "yellow" và giá trên 50000
console.log("Câu 4:");
const specificProduct = products.find(product => product.color.includes("yellow") && product.price > 50000);
console.log(specificProduct);

// Câu 5: Sử dụng some để kiểm tra xem có sản phẩm nào có số lượng lớn hơn 200 không
console.log("Câu 5:");
const hasHighQuantityProduct = products.some(product => product.quantity > 200);
console.log(hasHighQuantityProduct);

// Câu 6: Sử dụng every để kiểm tra xem tất cả các sản phẩm có màu "red" không
console.log("Câu 6:");
const allProductsAreRed = products.every(product => product.color.includes("red"));
console.log(allProductsAreRed);

// <===========================================================================>
// Bài 2 : key nào có giá trị rỗng xóa key đó ra khỏi mảng 
const bai2 = [
    {
        name: "Tùng",
        price: 50000,
        quantity: 100,
        color: ["red", "green", "blue"],
    },
    {
        name: "Dương",
        price: 0,
        quantity: 10,
        color: ["red", "green", "blue"],
    },
    {
        name: "",
        price: 60000,
        quantity: 80,
        color: ["red", "green", "yellow"],
    }
];

bai2.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        if (item[key] === "" || item[key] === 0) {
            delete item[key];
        }
    });
});
console.log(bai2, 'bai2');

// <===========================================================================>
// Bài 3 : Loại bỏ số 0 và ""

const bai3 = [
    {
        properties: "màu sắc",
        option: ["xanh", "", "đỏ", ""],
    },
    {
        properties: "giới tính",
        option: ["nam", "", "nữ", 0],
    },
];

// output: [
//     {
//         properties: "màu sắc",
//         option: ["xanh", "đỏ"],
//     },
//     {
//         properties: "giới tính",
//         option: ["nam", "nữ"],
//     },
// ]
const b3 = bai3.map(function (item) {
    return {
        properties: item.properties,
        option: item.option.filter(function (option) {
            return option !== "" && option !== 0;
        }),
    };
});
console.log(b3, "Bài 3");

// <===========================================================================>
// Bài 4 : Tính tổng tất cả các stockedQuantity của array
const bai4 = [
    {
        inventoryItem: {
            inventoryLevels: [
                {
                    stockedQuantity: 43,
                },
                {
                    stockedQuantity: 0,
                },
                {
                    stockedQuantity: 1,
                },
            ]
        }
    },
    {
        inventoryItem: {
            inventoryLevels: [
                {
                    stockedQuantity: 43,
                },
                {
                    stockedQuantity: 1,
                },
                {
                    stockedQuantity: 0,
                },
            ]
        }
    },
];

let sum = 0;
bai4.forEach(function (item) {
    item.inventoryItem.inventoryLevels.forEach(function (level) {
        sum += level.stockedQuantity;
    });
});

console.log(sum, "Bài 4"); // In ra tổng của tất cả các stockedQuantity trong mảng
