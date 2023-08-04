import React from 'react'
import './css/Loading.css'

export default function Loading() {
    return (
        <div style={{width:'100vw', height: '100vh', 
        backgroundColor: " rgb(255 255 255 / 0.3)"
        ,position:'fixed', top:'0', left: '0', zIndex:'99999'}} className=" backdrop-blur-sm  ">
            <div style={{width:'100%', height: '100%', display:"flex", alignItems:'center', justifyContent:'center'}}  className=" d-flex ">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/insta-fullstack.appspot.com/o/load-1110_256.gif?alt=media&token=56a65fa0-8518-43c2-82b0-245c912f8990"
                    alt="loading-envent-img"
                    style={{ height: '20%'}}
                />
            </div>
        </div>
    )
}
