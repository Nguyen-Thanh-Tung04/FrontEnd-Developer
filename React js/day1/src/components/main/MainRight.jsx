import React from 'react';
import mai from '../../assets/images/phim/mai.jpg';
import anhon from '../../assets/images/phim/keanhon.jpg';

const styles = {
    width: {
        width: '20%'
    }
};

const MainRight = () => {
    return (
        <div className="col-md-4 right">
            <h2>TOP PHIM CHIẾU RẠP</h2>
            <div className="item">
                <div className="card w-100" style={{ width: '18rem' }}>
                    <a href="detail.html">
                        <div className="d-flex p-3">
                            <div className="img" style={styles.width}>
                                <img src={mai} className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="ps-3">
                                <h5 className="card-title">Mai</h5>
                                <p className="card-text">Thanh Tùng</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card w-100" style={{ width: '18rem' }}>
                    <a href="detail.html">
                        <div className="d-flex p-3">
                            <div className="img" style={styles.width}>
                                <img src={anhon} className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="ps-3">
                                <h5 className="card-title">Mai</h5>
                                <p className="card-text">Thanh Tùng</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainRight;