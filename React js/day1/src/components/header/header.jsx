import React from 'react';
import logo from '../../assets/images/logo2.png';
import bgHeader from '../../assets/images/header-bg.jpg';

const styles = {
    header: {
      backgroundImage: `url(${bgHeader})`
    }
  };

export const Header = () => {
  return (
     <div className="container header text-white text-center" style={styles.header}>
      <div className="row justify-content-xxl-start">
        <div className="col-sm-2 text-center">
          <div className="logo col-sm-3 d-flex">
            <img style={{ height: '80px', width: '230px' }} src={logo} alt="Logo" />
          </div>
        </div>

        <div className="col-sm-5 text-center pt-4 mx-5">
          <div className="input-group">
            <form action="" className="input-group">
              <input type="text" placeholder="Tìm kiếm phim ..." className="form-control custom-input" aria-label="Dollar amount (with dot and two decimal places)" />
              <span className="input-group-text">
                <button className="btn rounded-circle" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};