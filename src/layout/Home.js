import React from 'react'
import ListBook from './ListBook'

export default function Home() {
    return (
        <div style={{ backgroundColor: '#f0f0f0' }}>
            {/* Carousel slider */}
            <div id="demo" className="carousel slide carousel-fade" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                </div>
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/npthangcom.appspot.com/o/FahasaSaleT3T723_W2_Banner_Social_1200x628PNG.png?alt=media&token=8ebe2b51-1ab1-4770-8454-ad4e0dbba001" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2023/FahasaSaleT3T723_W2_LDP_Banner_FlashSale_1200x550.jpg" alt="New York" className="d-block" style={{ width: '100%' }} />
                    </div>
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/npthangcom.appspot.com/o/FahasaSaleT3T723_W2_Banner_Social_1200x628PNG.png?alt=media&token=8ebe2b51-1ab1-4770-8454-ad4e0dbba001" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                    </div>
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>
            {/* icons */}
            <div className='container' >
                <div className='d-flex mt-3' >
                    <div className='col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs'>
                        <div className='text-center mt-3'>
                            <a href="">
                                <img src="	https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2023/TanVietT7_Platinum_LDP_SmallBanner_310x210.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs'>
                        <div className='text-center mt-3'>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2023/Tamlinh_mainbanner_T7_Smallbanner_310x210_1.png" alt="" />

                        </div>
                    </div>
                    <div className='col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs'>
                        <div className='text-center mt-3'>

                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2023/SmallBannerT7-02.png" alt="" />

                        </div>
                    </div>
                    <div className='col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs'>
                        <div className='text-center mt-3'>

                            <img src="	https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2023/TanVietT7_Platinum_LDP_SmallBanner_310x210.jpg" alt="loix" />

                        </div>
                    </div>
                </div>
              

                <div className='mt-4 d-flex text-center flex-wrap'   style={{ backgroundColor: '#fff', gap: '65px' }} >
                    <div className=' mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2023/Icon_B2S_1.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            <p>
                                trường học
                            </p>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <div>
                            <img src="	https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Thuong_120x120.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Flash Sale
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Mã Giảm Giá
                        </div>
                    </div>

                    <div className='mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_XuHuong_Thuong_120x120.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Xu hướng
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Sản phẩm
                        </div>
                    </div>

                    <div className='mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/F3_HomepageT6.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Sale Thứ 3
                        </div>
                    </div>

                    <div className='mt-3'>
                        <div>
                            <img src="	https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_VanPhongPham_Th%C6%B0%C6%A1ng_120x120.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Văn phòng
                        </div>
                    </div>

                    <div className='mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Manga_Week_Hot.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Manga
                        </div>
                    </div>

                    <div className='mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_PhienChoCu_8px_1.png" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            phiên chợ
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div>
                            <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Fahasasalethu3_w3_4_Icon_logo_07.jpg" width={50} height={50} alt="anh" />
                        </div>
                        <div className='mt-2'>
                            Tân Việt
                        </div>
                    </div>
                </div>
                {/* end icons */}

                <div className='d-flex p-3 mt-4' style={{ backgroundColor: '#FCDAB0' }}>
                    <div className='d-flex'>
                        <img src="	https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_flashsale@3x.png" alt=" ảnh" />
                        <h3 className='mx-3'>Flash Sale</h3>
                    </div>
                </div>

                <ListBook/>
            </div>




        </div>
    )
}

