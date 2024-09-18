console.log("DATE");
// DATE
console.log(Date.now());
const myDate = new Date();
console.log(myDate.getDay());
console.log(myDate.getMonth() + 1);
console.log(myDate.getFullYear());
console.log(myDate.getSeconds());
console.log(myDate.getHours());


// Lấy ngày hiện tại
const currentDate = new Date();

// Format ngày tháng
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Hiển thị ngày tháng ra màn hình
document.getElementById('currentDate').textContent = `Today is ${formattedDate}`;

// <===========================================================================>

console.log("OBJECT");
// OBJECT
const ob = {
    name: "Tùng",
    age: 10,
    score: 0,
};
// Có 2 cách lấy giá trị
// C1 : 
console.log(ob.age);
console.log(ob["age"]);
// delete ob.score;
console.log(ob)

for (let key in ob) {
    console.log(key);
    if (ob[key] === 0) {
        delete ob[key];
    }
}
console.log(ob);
console.log(Object.values(ob));
console.log(Object.keys(ob));
console.log(Object.entries(ob));

// <===========================================================================>
console.log("Array");
// Array
const array = [2, 3, 4, 90, 3];

// Ép kiểu dữ liệu thành string
console.log(array.join());  // Kết quả: "2,3,4,90,3"
console.log(array.join(""));  // Kết quả: "234903"
console.log(array.join(" "));  // Kết quả: "2 3 4 90 3"
console.log(array.join("_"));  // Kết quả: "2_3_4_90_3"

// Lấy giá trị cuối cắt nó ra
console.log(array.pop());  // Kết quả: 3

// Lấy giá trị đầu cắt nó ra
console.log(array.shift());  // Kết quả: 2

// Thêm giá trị vào cuối
console.log(array.push("Hà")); // Kết quả: 5, vì mảng có 5 phần tử sau khi "Hà" được thêm vào
console.log(array); // Kết quả: [3, 4, 90, 3, "Hà"]

// Thêm giá trị vào đầu mảng
array.unshift(1); // Thêm số 1 vào đầu mảng
console.log(array); // Kết quả: [1, 2, 3, 4, 90, 3]

// Nối mảng với một mảng khác
const newArray = [5, 6, 7];
const concatenatedArray = array.concat(newArray);
console.log(concatenatedArray); // Kết quả: [1, 2, 3, 4, 90, 3, 5, 6, 7]

// Tạo một mảng mới từ vị trí 2 đến vị trí 5 (không bao gồm vị trí 5)
const slicedArray = array.slice(2, 5);
console.log(slicedArray); // Kết quả: [3, 4, 5]

// Tạo một mảng mới từ vị trí 5 đến hết mảng
const slicedArrayFromIndex = array.slice(5);
console.log(slicedArrayFromIndex); // Kết quả: [6, 7, 8, 9]

// Tạo một bản sao của mảng gốc
const copiedArray = array.slice();
console.log(copiedArray); // Kết quả: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sử dụng split() để chia chuỗi thành một mảng các phần tử
console.log("Tung dz".split()); // Kết quả: ['Tung dz'] - Mảng chứa chuỗi ban đầu vì không có dấu phân cách được chỉ định

// Sử dụng toUpperCase() để chuyển đổi chuỗi thành chữ in hoa
console.log("Tung dz".toUpperCase()); // Kết quả: 'TUNG DZ'

// Sử dụng trim() để loại bỏ khoảng trắng từ cả hai đầu của chuỗi
console.log("  Tung dz  ".trim()); // Kết quả: 'Tung dz'

console.log("Tung dz".startsWith("xin")); //true

// <===========================================================================>

// ARRAY ADVANCE
let sum = 0;
[1, 2, 3, 4].forEach(function (item, index) {
    console.log(item); //1, 2, 3, 4
    sum += item;
    console.log(index);//0, 1 , 2, 3
})
console.log(sum); // 10

// <===========================================================================>

// Map

//[1, 2, 3, 4, 5] // [2,4,6,8,10];
const number = [1, 2, 3, 4, 5]
const newNumber = number.map(function (item, index) {
    return item * 2
})
console.log(newNumber);

const users = [
    {
        name: "Tung",
        score: 10,
    },
    {
        name: "Tung1",
        score: 3,
    }
];
const newUsers = users.map(function (item) {
    return {
        name: item.name.toUpperCase(),
        score: item.score,
        status: item.score < 5 ? "Ở lại" : "Lên lớp"
    }
})
console.log(newUsers);

// <===========================================================================>

console.log("Bài tập");
// Bài 1 : 
const demo = [1, 2, 3, 4, 5, 6];
// =>[true, false,true, false,true, false, true]
const newDemo = demo.map(function (item) {
    if (item % 2 === 0) {
        return true;
    }
    return false;

});
console.log(newDemo, ": Bài 1");

// Bài 2 : 
const values = ["a", "b", "c"];
// Trả về kiểu object
// const newValues = [
//     {
//         id: 1,
//         value: "a",
//     },
//     {
//         id: 2,
//         value: "b",
//     },
//     {
//         id: 3,
//         value: "c",
//     }
// ];
const newValues = values.map(function (item, index) {
    return {
        id: index + 1,
        value: item,
    }
})
console.log(newValues, ": Bài 2 ");

// <===========================================================================>

// ARRAY FILTER
console.log("FILTER");
const demoFilter = [1, 2, 3, 4, 5, 6];
const newFilter = demoFilter.filter(function (item) {
    // return item % 2 === 0;
    if (item % 2 === 0) {
        return true;
    }
    return false;
})
console.log(newFilter)

const listHs = [
    {
        name: "Tung1",
        score: 10,
    },
    {
        name: "Tung2",
        score: 5,
    },
    {
        name: "Tung3",
        score: 1,
    }
]
const newListHs = listHs.filter(function (item) {
    if (item.score < 5) {
        return true;
    }
})
console.log(newListHs);

// <===========================================================================>

// ARRAY FIND
console.log("FIND");
console.log(listHs.find(function (item) {
    if (item.score > 5) {
        return true;
    }
}));

// <===========================================================================>
console.log("SOME");
// ARRAY SOME VÀ EVERY
// hàm some trả về true khi có ít nhất 1 phần tử thỏa mãn điều kiện
const product = [
    {
        name: "iphone 1",
        amount: 9
    },
    {
        name: "iphone 2",
        amount: 1
    }
];
console.log(product.some(function (item) {
    // if (item.amount === 0) {
    //     return true;
    // }
    return !item.amount
}))

// Hàm every trả về true khi tất cả các phần tử thỏa mãn điều kiện

console.log(product.every(function (item) {
    // if (item.amount === 0) {
    //     return true;
    // }
    return !item.amount
}))

// ARRAY SORT
const sort = [2, 3, 5, 6, 9].sort(function (a, b) {
    if (a - b > 0) {
        return 1
    } else if (a - b < 0) {
        return -1
    }
})
console.log(sort);

// reduce 
const total = products.reduce(function (sum, item) {
    return sum + item.price
}, 0);
console.log(total);