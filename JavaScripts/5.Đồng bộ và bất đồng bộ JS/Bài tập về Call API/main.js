let app = document.querySelector('#app');
const show = () => {
    fetch('http://localhost:3000/products')
        .then(response => response.json()) // chuyển đổi dữ liệu từ json -> kiểu dữ liệu js
        .then(data => {                    // data là dữ mà .then đằng trước trả về
            app.innerHTML = data.map((item, index) => {
                return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td><img src="${item.image}" style="max-width: 300px; max-height: 100px;" alt=""></td>
                    <td>${item.price}</td>
                    <td>
                        <a class="btn btn-warning" href="update.html?id=${item.id}">Sửa</a>
                        <button id="btnDelete" class="btn btn-danger" data-id=${item.id}>Xóa</button>
                    </td>
                </tr>
            `;
            }).join('');
        })

        // xoa
        .then(() => {
            let btnDeletes = document.querySelectorAll('#btnDelete')
            for (const btnDelete of btnDeletes) {
                let id = btnDelete.dataset.id
                btnDelete.addEventListener('click', () => {
                    if (confirm('ban co muon xoa khong???')) {
                        fetch('http://localhost:3000/products/' + id, {
                            method: "DELETE"
                        })
                            .then(response => {
                                if (response.ok) {
                                    alert('xoa thanh cong')
                                    show()
                                } else {
                                    alert('xoa khong thanh cong')
                                }
                            })
                    }
                })
            }
        })
}
show()