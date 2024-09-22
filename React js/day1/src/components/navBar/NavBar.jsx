import React from 'react';
import bgNavbar from '../../assets/images/nav-bg.jpg';

const styles = {
    bgNavbar: {
      backgroundImage: `url(${bgNavbar})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
     
    }
  };
export const NavBar = () => {
  return (
   <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={styles.bgNavbar}>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="index.html">Phim mới</a>
                        </li>
                        <li className="nav-item ">
                            <div className="dropdown">
                                <button className="nav-link text-black btn dropdown-toggle dropdown-toggle-split text-white"
                                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false">THỂ LOẠI
                                </button>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item " href="#">Hài hước</a></li>
                                    <li><a className="dropdown-item " href="#">Hành động</a></li>
                                    <li><a className="dropdown-item " href="#">Tình cảm</a></li>
                                    <li><a className="dropdown-item " href="#">chiếu rạp</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Quốc gia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Phim lẻ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Phim bộ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Phim chiếu rạp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Tin tức</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
   </div>
  );
};