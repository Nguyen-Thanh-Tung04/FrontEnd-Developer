// ĐỒng bộ
// console.log(1);//3s
// console.log(2);//3s
// console.log(3);//3s
// console.log(4);//3s
// chạy hết 12s vì nó chạy lần lượt
// Bất đồng bộ chạy hết 3s vì có thể chạy tất cả cùng lúc
setTimeout(() => {
    console.log("Công việc 1");
}, 1000);
setTimeout(() => {
    console.log("Công việc 2");
}, 3000);
setTimeout(() => {
    console.log("Công việc 3");
}, 5000);
setTimeout(() => {
    console.log("Công việc 4");
}, 0);

const url = "https://dummyjson.com/products"
const total = document.getElementById("total")
const pagi = document.getElementById("pagination")
const tbody = document.querySelector("tbody")
const loadData = () => {
    fetch(`${url}?limit=10&skip=0`)
        .then((res) => res.json())
        .then((data) => {
            const { total: soluong, products, skip } = data;
            total.innerText = `Total ${soluong}`;
            renderTable(products)
            renderPagination([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        })
}
loadData();
const renderTable = (listProduct = []) => {
    tbody.innerHTML = listProduct.map((item) => {
        return `
        <tr>
            <td>${item.title}</td>
            <td >${item.description}</td>
            <td>${item.category}</td>
            <td>${item.stock}</td>
            <td>${item.price}</td>
            <td><img src="${item.thumbnail}" alt="" width="100px"></td>
            <td><button class="btn btn-info">Detail</button>
            </td>
        </tr>
        `
    }).join("")
}
const renderPagination = (arrayNumber) => {
    pagi.innerHTML = arrayNumber.map(i => {
        return `
       
    <li class="page-item"><a class="page-link" href="#">${i}</a></li>
   
   
        `
    }).join("")
}
