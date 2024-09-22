
import './App.css';
import { BoxProduct } from './components/BoxProduct';
import { Profile } from './components/profile';
import img1 from './assets/sp1.1.jpg'
import img2 from './assets/sp2.1.jpg'
import img3 from './assets/sp4.jpg'
import { MyButton } from './components/MyButton';
function App() {
  const listProduct = [
    {
      id:1,
      traGop: true,
      avatar: "/src/assets/sp1.1.jpg",
      title: "Iphone 15 pro Max 256gb",
      price: "29.000.000đ",
      subTitle: "Online rẻ quá ",
      sale: 16,
      des: ""
    },
    {
      id:2,
      traGop: false,
      avatar: "/src/assets/sp2.1.jpg",
      title: "Áo polo",
      price: "30.000.000đ",
      subTitle: "Online rẻ quá ",
      sale: "",
      des: ""
    },
    {
      id:3,
      traGop: true,
      avatar: "/src/assets/sp4.jpg",
      title: "Quần bò",
      price: "10.000.000đ",
      subTitle: "Online rẻ quá ",
      sale: 6,
      des: ""
    },
  ];
  return (
    <>
      {/* <Profile /> */}
      <div className='flex gap-2'>
        {
          listProduct.map((item, index) => (

            <BoxProduct
              key={index}
              item={item}
              onChosseData = {(giaTri)=>{
                console.log(giaTri,"giá trị");
              }}
            // traGop={item.traGop}
            // avatar={item.avatar}
            // title={item.title}
            // price={item.price}
            // subTitle={item.subTitle}
            // sale={item.sale}
            // des={item.des}
            />
          ))

        }

        {/* <BoxProduct
            traGop={false}
            avatar={img2}
            title="Xiaomi 14 Ultra"
            price="30.000.000đ"
            subTitle = {"Hàng sắp về"}
            sale = {""}
            des = "giảm giá ngay 4 củ + trả góp 0%"
          />
          <BoxProduct
            traGop={true}
            avatar={img3}
            title="Vivo V30e 5Gb 8Gb"
            price="10.000.000đ"
            subTitle = {"Hàng online rẻ quá"}
            sale = {3}
            des= ""
          /> */}

      </div>
      <MyButton
        title="Đăng nhập"
        classBtn="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
        onChosseData= {(data)=>{
          console.log(data,"Tung")
        }}
        type= {1}

        />
      <MyButton
        title="Đăng ký"
        classBtn="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onChosseData= {(data)=>{
          console.log(data,"Tung")

        }}
        type= {2}

        />

    </>
  )
}

export default App
