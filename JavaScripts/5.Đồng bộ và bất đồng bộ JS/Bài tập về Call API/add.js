let inputName = document.querySelector('#name');
let inputPrice = document.querySelector('#price');
let inputImage = document.querySelector('#image');
let addForm = document.querySelector('#addForm');

addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let newPro={
        name:inputName.value,
        price: inputPrice.value,
        image:inputImage.value
    }
    fetch('http://localhost:3000/products',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newPro) // chuyển dữ liệu sang dang json
    }) 
    .then(()=>{
        alert('Them thanh cong')
        window.location.replace("index.html")
    })
})
