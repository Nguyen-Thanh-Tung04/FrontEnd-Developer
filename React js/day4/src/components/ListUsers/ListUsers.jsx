import React, { useState } from 'react';

const ListUsers = () => {
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        image: null,
    });

    const [users, setUsers] = useState([]); // Lưu trữ danh sách người dùng
    const [isEditMode, setIsEditMode] = useState(false); // Chế độ chỉnh sửa
    const [selectedUserId, setSelectedUserId] = useState(null); // Người dùng được chọn để chỉnh sửa

    // Xử lý thay đổi form
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    // Thêm người dùng vào danh sách
    const handleSubmit = (e) => {
        e.preventDefault();

        // Nếu đang ở chế độ chỉnh sửa, cập nhật thông tin
        if (isEditMode) {
            const updatedUsers = users.map((user) =>
                user.id === selectedUserId ? { ...formData, id: selectedUserId } : user
            );
            setUsers(updatedUsers);
            setIsEditMode(false);
        } else {
            // Thêm người dùng mới
            const newUser = {
                ...formData,
                id: new Date().getTime(), // Tạo ID duy nhất
            };
            setUsers([...users, newUser]);
        }

        // Reset form sau khi thêm
        setFormData({
            id: null,
            name: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            image: null,
        });
    };

    // Xóa người dùng
    const handleDelete = (id) => {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
    };

    // Chỉnh sửa người dùng
    const handleEdit = (id) => {
        const userToEdit = users.find((user) => user.id === id);
        setFormData(userToEdit);
        setIsEditMode(true);
        setSelectedUserId(id);
    };

    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start p-5">
                {/* Form Section */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        {isEditMode ? 'Chỉnh sửa thông tin' : 'Đặt lịch hẹn'}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="mb-2 block text-base font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-indigo-500 focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phone" className="mb-2 block text-base font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-indigo-500 focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="mb-2 block text-base font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-indigo-500 focus:shadow-md"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label htmlFor="date" className="mb-2 block text-base font-medium text-gray-700">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg border border-gray-300 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-indigo-500 focus:shadow-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="time" className="mb-2 block text-base font-medium text-gray-700">
                                    Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg border border-gray-300 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-indigo-500 focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="image" className="mb-2 block text-base font-medium text-gray-700">
                                Ảnh đại diện
                            </label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-indigo-500 focus:shadow-md"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-indigo-600 py-3 px-8 text-center text-base font-semibold text-white hover:bg-indigo-500 transition ease-in-out duration-200"
                            >
                                {isEditMode ? 'Cập nhật' : 'Đặt lịch hẹn'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* User Info Section */}
                <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Thông tin người dùng</h2>
                    <p className="mb-2">
                        <strong>Full Name:</strong> {formData.name || 'Chưa nhập tên'}
                    </p>
                    <p className="mb-2">
                        <strong>Phone Number:</strong> {formData.phone || 'Chưa nhập số điện thoại'}
                    </p>
                    <p className="mb-2">
                        <strong>Email:</strong> {formData.email || 'Chưa nhập email'}
                    </p>
                    <p className="mb-2">
                        <strong>Date:</strong> {formData.date || 'Chưa chọn ngày'}
                    </p>
                    <p className="mb-4">
                        <strong>Time:</strong> {formData.time || 'Chưa chọn giờ'}
                    </p>
                    {formData.image && (
                        <div>
                            <p className="mb-2">
                                <strong>Ảnh đại diện:</strong>
                            </p>
                            <img
                                src={URL.createObjectURL(formData.image)}
                                alt="Ảnh đại diện"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Table Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Danh sách người dùng</h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Họ tên</th>
                            <th className="py-2 px-4 border-b">Số điện thoại</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Ngày</th>
                            <th className="py-2 px-4 border-b">Giờ</th>
                            <th className="py-2 px-4 border-b">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.phone}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">{user.date}</td>
                                <td className="py-2 px-4 border-b">{user.time}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="mr-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition ease-in-out duration-200"
                                        onClick={() => handleEdit(user.id)}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition ease-in-out duration-200"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        Xóa
                                    </button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListUsers;
