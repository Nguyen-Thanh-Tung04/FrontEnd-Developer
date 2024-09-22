import React from 'react';
import mai from '../../assets/images/phim/mai.jpg';
import anhon from '../../assets/images/phim/keanhon.jpg';


const styles = {
    width: {
        width: '100%'
    }
};

const MainLeft = () => {
    return (
        <div class="col-md-8 row left">
                <h2>PHIM ĐỀ CỬ</h2>
                <div className="col-md-3">
                    <a href="detail.html">
                        <img src={mai} style={styles.width} alt="" />
                        <div className="card-body p-2">
                            <h5 className="card-title"><a href="detail.html">Mai</a></h5>
                            <p className="card-text"><a href="detail.html">Thanh Tùng</a></p>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="detail.html">
                        <img src={anhon} style={styles.width} alt="" />
                        <div className="card-body p-2">
                            <h5 className="card-title"><a href="#">Wonka</a></h5>
                            <p className="card-text"><a href="#">Thanh Tùng</a></p>
                        </div>
                    </a>
                </div>
                {/* Other similar image blocks */}
                <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
    );
};

export default MainLeft;