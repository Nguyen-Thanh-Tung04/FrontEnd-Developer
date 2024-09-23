let inputName = document.querySelector('#name');
let inputPrice = document.querySelector('#price');
let inputImage = document.querySelector('#image');
let updateForm = document.querySelector('#updateForm');

// lấy giá trị id trên url
let searchParam = new URLSearchParams(document.location.search)
let id = searchParam.get("id")

// lấy dữ liệu theo id và hiển thị nó vào input
fetch('http://localhost:3000/products/' + id)
    .then(response => response.json())
    .then(data => {
        inputName.value=data.name
        inputPrice.value=data.price
        inputImage.value=data.image
    })

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // đẩy dữ liệu mới lên theo kiểu đối tượng
    let updatePro ={
        name:inputName.value,
        image:inputImage.value,
        price:inputPrice.value,  
    }

    fetch('http://localhost:3000/products/' + id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatePro) // chuyen du lieu sang json
    })
    .then(()=>{
        window.location.href="index.html"
    })
})