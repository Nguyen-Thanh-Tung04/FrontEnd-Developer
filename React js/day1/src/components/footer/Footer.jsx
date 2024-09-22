import React from 'react';
import logo from '../../assets/images/logo2.png';
import bgFooter from '../../assets/images/bg-footer.png';

const footerStyle = {
  color: '#44e2ff',
  backgroundImage: `url(${bgFooter})`
};

export const Footer = () => {
  return (
    <footer style={footerStyle}>
        <div className="container">
            <div className="row">
                <div className="col-sm-3 text-center">
                    <img src={logo} className="w-75" alt="Logo" />
                </div>
                <div className="col-sm-3 d-flex align-items-start flex-column">
                    <p className="text-white text-uppercase">Phim mới</p>
                    <ul className="list-unstyled pl-0 d-flex align-items-start flex-column">
                        <li className="d-block"><a href="#">Phim chiếu rạp</a></li>
                        <li className="d-block"><a href="#">Phim hành động</a></li>
                        <li className="d-block"><a href="#">Phim tình cảm</a></li>
                        <li className="d-block"><a href="#">Phim hài hước</a></li>
                        <li className="d-block"><a href="#">Phim kinh dị</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 text-center d-flex align-items-start flex-column">
                    <p class="text-white">Phim hay</p>
                    <ul class="list-unstyled pl-0 d-flex align-items-start flex-column">
                        <li class="d-block"><a href="#">Phim Âu Mỹ</a></li>
                        <li class="d-block"><a href="#">Phim Hàn Quốc</a></li>
                        <li class="d-block"><a href="#">Phim Thái Lan</a></li>
                        <li class="d-block"><a href="#">Phim Nhật Bản</a></li>
                        <li class="d-block"><a href="#">Phim Việt Nam</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 text-center d-flex align-items-start flex-column">
                    <p class="text-white">Thông tin</p>
                    <ul class="list-unstyled pl-0 d-flex align-items-start flex-column">
                        <li class="d-block"><a href="#">Giới thiệu</a></li>
                        <li class="d-block"><a href="#">Liên hệ</a></li>
                        <li class="d-block"><a href="#">Điều khoản sử dụng</a></li>
                        <li class="d-block"><a href="#">Chính sách riêng tư</a></li>
                        <li class="d-block"><a href="#">Khiếu lại bản quyền</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <span>Liên hệ đặt quảng cáo</span>
        <h5>Telegram: <a style={{ color: '#44e2ff' }}>@megaphim</a></h5>
        <div className="abc">Các liên kết khác</div>
    </footer>
  );
};