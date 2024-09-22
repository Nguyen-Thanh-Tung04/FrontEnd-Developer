import React, { useState } from 'react';

export const DemoForm = () => {

    // khi học như này 

    // const [username, setUserName] = useState("")
    // const [password, setPassWord] = useState("")

    // const handleChangeUserName = (e) => {
    //     setUserName(e.target.value, 'eee');

    // }
    // const handleChangePassWord = (e) => {
    //     setPassWord(e.target.value, 'eee');

    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Xử lý đăng nhập ở đây
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <input type="text" name="username" placeholder='Nhập tên' onChange={handleChangeUserName} />
    //         </div>
    //         <div>
    //             <input type="password" name="password" placeholder='Nhập mật khẩu' onChange={handleChangePassWord} />
    //         </div>
    //         <button type="submit">Login</button>
    //         <p>{username}</p>
    //         <p>{password}</p>
    //     </form>

    // );

    // ĐI LÀM
    const [formData, setFormData] = useState({
        userName: "",
        passWord: "",
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
        console.log(value, 'e', name);
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập ở đây
        console.log(formData, 'formData');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder='Nhập tên'
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder='Nhập mật khẩu'
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
            <p>{formData.username}</p>
            <p>{formData.password}</p>
        </form>

    );
}