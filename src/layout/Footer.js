import React from 'react'
import "../layout/css/footer.css"

export default function Footer() {
    const handleClickDow = () => {
        window.scroll(5000, 5000)
    }
    const handleClickTop = () => {
        window.scroll(0, 0)
    }
    return (
        <div className='pt-3' style={{ backgroundColor: '#f0f0ee' }}>
            <div>
                <button className='btn btn-warning d-flex justify-content-center' onClick={handleClickTop} style={{
                    borderRadius: '50%',
                    top: '600px',
                    right: '30px',
                    position: 'fixed'
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </button>
                <button className='btn btn-warning d-flex justify-content-center' onClick={handleClickDow} style={{
                    borderRadius: '50%',
                    top: '650px',
                    right: '30px',
                    position: 'fixed'
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
            <div className='container p-2' >
                <div className='d-flex justify-content-end mb-3'>

                </div>
                <div className='text-center d-flex pt-2 pb-2' style={{ backgroundColor: '#9fa7ab', borderRadius: '6px  6px 0 0' }}>
                    <div className='col-2'>

                    </div>
                    <div className='col-3'>
                        <div className='' style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="" style={{ color: '#fff', }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                            </a>
                            <span className='mx-4 text-mail' style={{ color: '#fff' }}>  Đăng ký nhận bản tin</span>
                        </div>
                    </div>
                    <div className='col-5 d-flex'>
                        <div >
                            <input type="text" style={{ display: 'inline-block', width: '400px' }} />
                        </div>
                        <button className='btn btn-warning mx-3' style={{ color: '#fff' }}>Đăng ký</button>
                    </div>
                    <div className='col-3'>

                    </div>
                </div>

                <div className='footer-book ' style={{ backgroundColor: '#fff' }}>
                    <div className='row '>
                        <div className='col-4 '>
                            <div className='line-right'>
                                <h1 className='mx-2' style={{ color: 'red' }}>BookStore</h1>
                                <div className=''>
                                    <p className='text-footer'>

                                        Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách
                                        TP HCM - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam <br></br>Fahasa.com nhận
                                        đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận
                                        hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.

                                    </p>
                                    <div className='d-flex mx-2'>
                                        <a href="" >
                                            {/* facebook */}
                                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/footer/Facebook-on.png" alt="face" style={{ width: '30px', height: '30px' }} />

                                        </a>

                                        <a href="" className='mx-3 '>
                                            {/* instagram */}
                                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" alt="face" style={{ width: '30px', height: '30px' }} />
                                        </a>
                                        <a href="">
                                            <img src="	https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Youtube-on.png" alt="face" style={{ width: '30px', height: '30px' }} />
                                        </a>
                                        <a href="" className='mx-3 '>
                                            <img src="	https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/tumblr-on.png" alt="face" style={{ width: '30px', height: '30px' }} />
                                        </a>
                                        <a href="">
                                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/twitter-on.png" alt="face" style={{ width: '30px', height: '30px' }} />
                                        </a>
                                        <a href="" className='mx-3 '>
                                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/pinterest-on.png" alt="face" style={{ width: '30px', height: '30px' }} />
                                        </a>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <a className='mx-4'>
                                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/android1.png " alt="" style={{ width: '100px' }} />
                                        </a>
                                        <a className=''>
                                            <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png " alt="" style={{ width: '100px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-8  mt-5'>
                            <div className=' col-12 d-flex'>
                                <div className='col-4 '>
                                    <h4 >Dịch vụ</h4>
                                    <div >
                                        <p className='footer-text'>
                                            Điều khoản sử dụng
                                        </p>
                                        <p className='footer-text'>
                                            Chính sách bảo mật thông tin
                                        </p>
                                        <p className='footer-text'>
                                            Chính sách bảo mật thanh toán
                                        </p>
                                        <p className='footer-text'>
                                            Giới thiệu BookStore
                                        </p>
                                        <p className='footer-text'>
                                            Hệ thông trung tâm nhà sách
                                        </p>
                                    </div>

                                </div>

                                <div className='col-4 '>
                                    <h4 className=''>Hỗ trợ</h4>
                                    <div className=''>
                                        <p className='footer-text'>
                                            Chính sách đổi - trả - hoàn tiền
                                        </p>
                                        <p className='footer-text'>
                                            Chính sách bảo hành - bồi hoàn
                                        </p>
                                        <p className='footer-text'>
                                            Chính sách vận chuyển
                                        </p>
                                        <p className='footer-text'>
                                            Chính sách khách sỉ
                                        </p>
                                        <p className='footer-text'>
                                            Phương thức thanh
                                            toán và xuất HĐ
                                        </p>
                                    </div>

                                </div>
                                <div className='col-4 '>
                                    <h4 className=''>Tài khoản của tôi</h4>
                                    <div className=''>
                                        <p className='footer-text'>
                                            Đăng
                                            nhập/Tạo mới tài khoản
                                        </p>
                                        <p className='footer-text'>
                                            Thay đổi địa chỉ
                                            khách hàng
                                        </p>
                                        <p className='footer-text'>
                                            Chi tiết tài
                                            khoản
                                        </p>
                                        <p className='footer-text'>
                                            Lịch
                                            sử mua
                                            hàng
                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className='row '>
                                <div className='col-12 '>
                                    <h4>
                                        Liên hệ
                                    </h4>
                                    <div className='d-flex'>
                                        <div className='col-4'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                                <span className='mx-2 footer-text'>
                                                    60-62 Lê Lợi, Q.1, TP.HN
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                                </svg>
                                                <span className='mx-2 footer-text'>
                                                    cskh@bookStore.com.vn
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                                <span className='mx-2 footer-text'>
                                                    19001019
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='d-flex mt-3' style={{ gap: '15px' }} >
                                    <div className=''>
                                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" style={{ height: '60px' }} alt="" />
                                    </div>
                                    <div className=''>
                                        <img src="	https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/ahamove_logo3.png" style={{ height: '60px' }} alt="" />
                                    </div>
                                    <div className=''>
                                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_giao_hang_nhanh1.png" style={{ height: '60px' }} alt="" />
                                    </div>
                                    <div className=''>
                                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_snappy1.png" style={{ height: '60px' }} alt="" />
                                    </div>
                                    <div className=''>
                                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/Logo_ninjavan.png" style={{ height: '60px' }} alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='text-center mt-3'>
                            <p style={{ color: '#adadad' }}>
                                Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
