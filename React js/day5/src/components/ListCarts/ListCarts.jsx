import React, { useEffect, useState } from 'react';
import ApiService from '../../service/apiService';
import '../../App.css';
import { CartItems } from './CartItems';

export const ListCarts = () => {
  const [dataCarts, setDataCarts] = useState({
    carts: [],
    total: 0,
  });

  const loadDataListCarts = async () => {
    const res = await ApiService.apiGetListCarts();
    console.log(res, "List Carts fetched");
    const { carts, total } = res.data;
    
    setDataCarts({
      ...dataCarts,
      carts,
      total,
    });
  };

  useEffect(() => {
    loadDataListCarts();
  }, []);
  
  console.log(dataCarts, "dataCarts");
  
  return (
    <>
      <b className='m-4 text-blue-600'>Total Carts : {dataCarts.total}</b>
      <div className="carts-container">
        {
          dataCarts.carts.map((item, index) => (
            // <div key={index} className="cart-item">
            //   <b>Giỏ hàng {index + 1}</b>
            //   <div>Tổng sản phẩm : {item.total} USD</div>
            //   <div>Số lượng sản phẩm : {item.totalProducts}</div>
            //   <div>Tổng đơn hàng : {item.totalQuantity}</div>
            // </div>
            <CartItems key={item.id} data= {item} index={index} />
          ))  
        }
      </div>
    </>
  );
};
