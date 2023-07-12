import React from 'react'

export default function Home() {
    return (

        <div>
            {/* Carousel */}
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/npthangcom.appspot.com/o/images%2Fbanner.jpg?alt=media&token=ea49f801-aaa9-403e-9806-2be12fc8e51f" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/npthangcom.appspot.com/o/images%2Fbanner4-1200x350.jpg?alt=media&token=1d1ffb51-2b1b-4a15-9552-10ba2a11d49f" alt="Chicago" className="d-block" style={{ width: '100%' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/npthangcom.appspot.com/o/images%2FBannerTong.png?alt=media&token=482d7711-312f-4498-a6a5-624a89e5330f" alt="New York" className="d-block" style={{ width: '100%' }} />
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
        
        </div>
    )
}

