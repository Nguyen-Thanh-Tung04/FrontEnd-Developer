// chuyển đổi ảnh con và ảnh to của sản phẩm
const handleChangeImg = (url) => {
    console.log(url, 'url')
    const img_main = document.getElementById('img_main');
    img_main.setAttribute('src', url);
}

// CRUD
let products = [];
// Create
function addProduct() {
    let nameInput = document.getElementById('nameInput').value;
    let priceInput = document.getElementById('priceInput').value;
    let idInput = document.getElementById('idInput').value;
    let imgInput = document.getElementById('imgInput').value;

    let product = {
        name: nameInput,
        price: priceInput,
        id: idInput,
        img: imgInput
    };

    products.push(product);
    renderProducts();
}
// render
function renderProducts() {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach((product, index) => {
        let li = document.createElement('li');

        let img = document.createElement('img');
        img.src = product.img;
        img.style.width = '50px';
        img.style.height = '50px';
        li.appendChild(img);

        let name = document.createTextNode(product.name + ' - Price: $' + product.price);
        li.appendChild(name);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteProduct(index));
        li.appendChild(deleteButton);

        productList.appendChild(li);
    });
}
//Delete
function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}