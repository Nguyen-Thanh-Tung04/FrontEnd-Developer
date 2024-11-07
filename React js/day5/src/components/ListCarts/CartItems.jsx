import React, { useState, useEffect } from 'react';
import ApiService from '../../service/apiService';

// Modal Component to show cart details
const Modal = ({ isOpen, onClose, cartId }) => {
    const [cartDetails, setCartDetails] = useState(null);

    useEffect(() => {
        if (isOpen && cartId) {
            const fetchCartDetails = async () => {
                const response = await ApiService.apiGetCartDetail(cartId);
                setCartDetails(response.data);  // Update with fetched cart details
            };
            fetchCartDetails();
        }
    }, [isOpen, cartId]);

    if (!isOpen || !cartDetails) return null;  // Don't render if modal is closed or data isn't fetched

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <ul>
                    {cartDetails.products.map(product => (
                        <li key={product.id} className="product-item">
                            <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
                            <div className="product-details">
                                <h3>{product.title}</h3>
                                <p>Price: ${product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                                <p>Total: ${product.total}</p>
                                <p>Discount: {product.discountPercentage}%</p>
                                <p>Discounted Total: ${product.discountedTotal}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="btn" onClick={onClose}>Đóng</button>
            </div>
        </div>
    );
    
};

export const CartItems = ({ data, index }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleDetail = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="cart-item">
            <b>Giỏ hàng {index + 1}</b>
            <div>Tổng sản phẩm : {data.total} USD</div>
            <div>Số lượng sản phẩm : {data.totalProducts}</div>
            <div>Tổng đơn hàng : {data.totalQuantity}</div>
            <button className="btn mt-5" onClick={handleDetail} type="button">
                Chi tiết
            </button>

            {/* Modal hiển thị chi tiết giỏ hàng */}
            <Modal isOpen={isModalOpen} onClose={closeModal} cartId={data.id} />
        </div>
    );
};
