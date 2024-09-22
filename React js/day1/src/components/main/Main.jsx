import React from 'react';
import MainLeft from './MainLeft'; // Importing the default export from MainLeft
import MainRight from './MainRight'; // Importing the default export from MainRight
import bgMain from '../../assets/images/body_bg.gif';

const styles = {
  bg:{
    backgroundImage: `url(${bgMain})`
}
};
   
export const Main = () => {
  return (
    <div className='container' style={styles.bg}>
      <div className="row link">
        <ol>Xem phim / <span>Phim chiếu rạp</span></ol>
      </div>
      <div className="row filter">
        <div className="col-md-2">
          <label for="">Định dạng</label>
          <select className="form-select" name="" id="">
            <option value="1">Mọi định dạng</option>
            <option value="1">Phim lẻ</option>
            <option value="1">Phim bộ</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="">Quốc gia</label>
          <select className="form-select" name="" id="">
            <option value="1">Tất cả quốc gia</option>
            <option value="1">Việt Nam</option>
            <option value="1">Hàn Quốc</option>
            <option value="1">Mỹ</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="">Thể loại</label>
          <select className="form-select" name="" id="">
            <option value="1">Tất cả thể loại</option>
            <option value="1">Hành động</option>
            <option value="1">Tình cảm</option>
            <option value="1">Chiếu rạp</option>
            <option value="1">Kinh dị</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="">Năm</label>
          <select className="form-select" name="form-control" id="">
            <option value="1">Tất cả các năm</option>
            <option value="1">2024</option>
            <option value="1">2023</option>
            <option value="1">2022</option>
            <option value="1">2021</option>
            <option value="1">2020</option>
            <option value="1">2019</option>
            <option value="1">2018</option>
          </select>
        </div>
        <div className="col-md-2" >
          <button className="btn btn-danger ">Lọc phim</button>
        </div>
      </div>
      <article>
      <div class="container" > 
      <div class="row ">
      <MainLeft />
      <MainRight />
      </div>
      </div>
      </article>


    </div>
  );

};
