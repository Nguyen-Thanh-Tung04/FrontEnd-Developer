// arrow functions
function myFn() { }
const myFn1 = () => { };
() => { };
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumber = number.map(item => item * 2);
console.log(newNumber);

// Tạo thuộc tính cho object 

const addres = "Hưng Yên"
const object = {
    name: "Tùng",
    age: 20,
    addres,
}
console.log(object);


const myObj = {
    id: 1,
    name: "Tùng",
    age: 20,
    love: {
        love1: "Hà",
        love2: "Xuân"
    }
};

const {
    name,
    age,
    love: { love1: ten_love }
} = myObj;

console.log(name);
console.log(age);
console.log(ten_love);

// Spread operator 
const obDemo = {
    id: 1,
    name_t: "Tung",
    total: 10,
};
const obdm1 = {
    ...obDemo,
    diem: 10,
    id: 100,
    total: 99,
}
console.log(obdm1);

const tu = [1, 2, 3, 4];
const ng = [5, 6, 7, 8, 9];
console.log(...tu, ...ng);

// DOM 

// getElementById
const elementById = document.getElementById('myDiv');
console.log(elementById.textContent);

// getElementsByTagName
const paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
    console.log(p.textContent);
}

// querySelector
const paragraphInsideDiv = document.querySelector('.container p');
console.log(paragraphInsideDiv.textContent);

// querySelectorAll
const listItems = document.querySelectorAll('ul li');
listItems.forEach(item => {
    console.log(item.textContent);
})

// atributes
// + get attribute => giúp chúng ta lấy giá trị ra
// + set attribute =>giúp chúng ta thêm giá trị vào 

// get attribute
const image = document.getElementById('myImage');
const src = image.getAttribute('src');
console.log('Image source: ' + src);

// set attribute
image.setAttribute('alt', 'New Alt Text');
console.log('New alt text: ' + image.getAttribute('alt'));

const demo_a = document.querySelectorAll("a");
demo_a.forEach((item) => {
    if (item.textContent === "https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/dataimages/202103/original/images2351925_t61.jpg") {
        item.setAttribute('href', item.innerText);
    } else {
        item.setAttribute('href', item.innerText);
    }
    item.setAttribute('target', "_blank");
});

const previewImg = document.getElementById("previewImg");
previewImg.setAttribute('src', 'https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/dataimages/202103/original/images2351925_t61.jpg');