import React from 'react'


export const BoxProduct = (props) => {
    console.log(props, 'props')
    const { onChosseData } = props;
    const { avatar, traGop, title, subTitle, sale, price , id} = props.item;
    const handleDetail = (id) => {
        console.log(id)
        onChosseData(id)
    }
    return (
        <>
            <div className=' border-gray-900 border rounded-lg cursor-pointer p-2'>
                {
                    traGop && <p>Trả góp 0%</p>
                }
                <img src={avatar} />
                <p>{title}</p>
                <p>{subTitle}</p>
                <b className='text-red-700'>{price}</b>{
                    sale && <span>-{sale}%</span>
                }
                <div>
                    <button type="button"
                        onClick={() => handleDetail(id)}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Mua
                    </button>
                </div>
            </div>
            {/* <div className=' border-gray-900 border rounded-lg cursor-pointer p-2'>
                <img src={img2} />
                <p>Xiaomi 14 Ultra</p>
                <p>Hàng sắp về</p>
                <b className='text-red-700'>30.000.000đ</b>
                <p>giảm giá ngay 4 củ + trả góp 0%</p>
            </div>
            <div className=' border-gray-900 border rounded-lg cursor-pointer p-2'>
                <p>Trả góp 0%</p>
                <img src={img3} />
                <p>Vivo V30e 5Gb 8Gb</p>
                <p>Hàng sắp về</p>
                <b className='text-red-700'>10.000.000đ</b>
                <p>giảm giá ngay 4 củ + trả góp 0%</p>
            </div> */}
        </>
    )
}
