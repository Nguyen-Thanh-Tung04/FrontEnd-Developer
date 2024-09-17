// Bài 1: Tính S(n) = 1^3 + 2^3 + ... + N^3
function tinhTongLapPhuong(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += Math.pow(i, 3);
    }
    return tong;
}
console.log("bài 1");
console.log(tinhTongLapPhuong(5));

// <=================================================>

// Bài 2: Tính S(n) = 1 + 1/2 + 1/3 + ... + 1/n
function tinhTongPhanSo(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += 1 / i;
    }
    return tong;
}
console.log("bài 2");
console.log(tinhTongPhanSo(10));

// <=================================================>

// Bài 3: Tính S(n) = 1/2 + 1/4 + 1/6 + ... + 1/2n
function tinhTongPhanSoChan(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += 1 / (2 * i);
    }
    return tong;
}
console.log("bài 3");
console.log(tinhTongPhanSoChan(5));

// Kiểm tra hàm tinhTongPhanSo
function tinhTongPhanSo(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += 1 / i;
    }
    return tong;
}

console.log((10));

// <=================================================>

// Bài 4 : Tìm số lớn nhất
function timSoLonNhat(arr) {
    return Math.max(...arr);
}

console.log("bài 4");
console.log(timSoLonNhat([3, 18, 2, 9]));

// <=================================================>

// Bài 5 : cho 1 object lưu thông tin của 1 sp trong cửa hàng , object này lưu trữ các thong tin : 
// name : tên sp
// code : mã sp
// ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này ví dụ : 
// red : 10 (sản phẩm này còn 10 cái màu đỏ)
// blue : 11 ...
// giả sử không biết sản phẩm có những màu nào 
// viết hàm nhận vào một object kiểu này và trả về tổng số hàng tồn kho

const product = {
    name: "Áo thun",
    code: "SP001",
    red: 10,
    blue: 20,
    green: 30,
    gold: 20,
    title: "",
    score: 0
};

// delete product[key]; xóa phần tử rỗng hoặc bằng 0
product["gold"] //20

function bai5(object) {
    let total = 0;
    for (let key in object) {
        if (key !== "name" && key !== "code" && typeof object[key] === 'number') {
            total += object[key];
        }
    }
    return total;
}
console.log("bài 5");
console.log(bai5(product));

// <=================================================>

// Bài 6 : viết 1 hàm nhận vào 1 mảng các học sinh có điểm score hiển thị ra học sinh có điểm cao nhất
function bai6(arrHs) {
    if (arrHs.length === 0) {
        return "Không có học sinh nào trong mảng.";
    }

    let maxScore = arrHs[0].score;
    let name = arrHs[0].name;

    for (let i = 1; i < arrHs.length; i++) {
        if (arrHs[i].score > maxScore) {
            maxScore = arrHs[i].score;
            name = arrHs[i].name;
        }
    }

    return `Học sinh có điểm cao nhất là: ${name} - Điểm: ${maxScore}`;
}

const hocsinh = [
    {
        name: "Hà",
        score: 80
    },
    {
        name: "Tùng",
        score: 50
    }
];
console.log("bài 6");
console.log(bai6(hocsinh));

// <=================================================>
// Bài 7 : 
const a = ["A", "B", "C"];
const b = [1, 2, 3];
// c = [
//     { value: "A1", id: 1 },
//     { value: "B2", id: 2 },
//     { value: "C3", id: 3 },

// ]
let c = []
for (let i = 0; i < a.length; i++) {
    const item = {
        value: a[i] + b[i],
        id: i + 1
    };
    c.push(item);
};
console.log(c, "bai7")

// <=================================================>
// Bài 8
const gender = [
    {
        id: 1,
        name: "A",
        gender: "Nam"
    },
    {
        id: 2,
        name: "B",
        gender: "Nữ"
    },
    {
        id: 3,
        name: "C",
        gender: "Nam"
    },
    {
        id: 4,
        name: "D",
        gender: "Nam"
    },
]
//OUTPUT: 
// const b = [
//     {human:"A1", gender:"name"},
//     {human:"C3", gender:"name"},
//     {human:"D4", gender:"name"},
// ]
let outPut = []
for (let i = 0; i < gender.length; i++) {
    if (gender[i].gender === "Nam") {
        const item = {
            human: gender[i].name + gender[i].id,
            gender: gender[i].gender
        }
        outPut.push(item);
    }
}
console.log(outPut, "bai8");

// <=================================================>
// Bài 9
const number = [2, -5, 6, -7, -4, 7]
let tong = 0;
let demSo = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
        tong += number[i];
        demSo++;
    }
}
const tbc = tong / demSo
console.log(tbc, "bài 9")
// <=================================================>
// Bài 10 : 
const demo = [1, 2, 3, 4, 5, 6]
const newDemo = demo.map((item) => {
    return item % 2 === 0 ? true : false
})
console.log(newDemo);
//filter
const filter = [1, 2, 3, 4, 5, 6];
const newFilter = filter.filter((item) => {
    return item % 2 === 0;
})
console.log(newFilter);

const listHs = [
    {
        name: "nghiem",
        score: 10,

    },
    {
        name: "nghiem1",
        score: 20,
    },
    {
        name: "nghiem2",
        score: 30,
    },
    {
        name: "nghiem3",
        score: 40,
    }
];
const newListHs = listHs.filter((item) => {
    return item.score > 20;
})
console.log(newListHs)
const id = 2

const checkFilter = [1, 2, 3, 4, 5];
const check = checkFilter.filter((item) => {
    return item !== id ? true : false
})
console.log(check)
//Array sort
const sort = [3, 2, 6, 89, 9, 2].sort((a, b) => {
    if (a - b < 0) {
        return 1
    } else if (a - b > 0) {
        return -1
    }
}
)
console.log(sort)
// bài 11 
///Bài tập
const productList = [
    {
        name: "but bi",
        price: 5000,
        amount: 10,
        color: ["red", "green", "blue"],
        origin: "hoc mai",
        code: "BC01"
    },
    {
        name: "but chi",
        price: 6000,
        amount: 20,
        color: ["red", "back", "blue"],
        origin: "thien long",
        code: "BC02"
    },
    {
        name: "but Bear",
        price: 16000,
        amount: 60,
        color: ["red", "yeallow", "blue"],
        origin: "thien long",
        code: "BC03"
    },
]
productList.forEach((item) => {
    console.log(`Sản phẩm ${item.name} - mã sản phẩm ${item.code} - giá bán là ${item.price} vnđ, với các màu ${item.color.join("-")}`)
})
const cau2 = productList.map((item) => {
    return {
        name: item.name.toLocaleUpperCase(),
        price: item.code === "BC03" ? item.price + 2000 : item.price,
        amount: item.amount,
        color: item.code === "BC03" ? item.color.concat("pink") : item.color,
        origin: item.origin,
        code: item.code

    }
})
console.log('câu 2')
console.table(cau2)
//câu 3 lọc sản phẩm tồn kho >10  giá lớn > 6000
const cau3 = productList.filter((item) => {
    return item.amount > 10 && item.price > 6000
})
console.log('câu3 ')

console.table(cau3)
//câu 4
const cau4 = productList.filter((item) => {
    return item.origin === "thien long" && (item.price > 10000 || item.amount < 6)
})
console.log(cau4)
//cau 5
const cau5 = productList.map((item) => {
    return {
        // name: item.name,
        // price: item.code,
        // amount: item.amount,
        // color: item.code,
        // origin: item.origin,
        // code: item.code,
        ...item,
        locked: item.origin === "thien long" ? "Cấm bán" : "Cho phép bán"
    }
})
console.log(cau5)
//cau 6
const cau6 = productList.sort(function (a, b) {
    if (a.price - b.price > 0) {
        return 1
    }
    else {
        return -1
    }
})
console.log(cau6)
//cau 7
const cau7 = productList.sort(function (a, b) {
    if (a.amount - b.amount < 0) {
        return 1
    }
    else {
        return -1
    }
})
console.log(cau7)

// <===========================================================================>
// bai2
const studentList = [
    {
        name: "toan1",
        score: [90, 85, 92]
    },
    {
        name: "toan2",
        score: [75, 80, 85]
    },
    {
        name: "toan3",
        score: [90, 95, 89]
    },
    {
        name: "toan4",
        score: [100, 100, 100]
    }
]
//cau1 lọc danh sách sinh viên  có điểm trung bình > 90
const tbcStudent = studentList.map((item) => {
    const avgStudent = item.score.reduce((sum, score) => sum + score, 0) / item.score.length
    return {
        name: item.name,
        tbcStudent: avgStudent,
    }
})
console.log(tbcStudent)
const avghigher90 = tbcStudent.filter((item) => {
    return item.tbcStudent > 90
})
console.log(avghigher90)
///
const newAray = ["", "toan", "", "", "toan1"];
const bai8Result = newAray.filter((item, index) => {
    return item !== "" || index < 2;
})
console.log(bai8Result, "bai8Result")

