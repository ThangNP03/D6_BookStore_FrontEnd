import React from 'react'
import './css/Admin.css'
import { Link } from 'react-router-dom'

export default function Admin() {
    return (
        <div className='pt-5 pb-5' style={{backgroundColor: '#f0f0ee'}}>
            <div className='container shadow p-5' style={{backgroundColor: "#fff", borderRadius: '6px', height: '65vh' }} >
                <div className='row mt-5' style={{justifyContent:'center', justifyContent: 'space-between'}}>
                    <Link to={'/bookManager'} className=' col-3 manager-1 shadow ' style={{width: '300px' , height:'300px',}}>
                            Quản lý sách
                    </Link>
                    <Link to={'/managerUser'} className=' col-3 manager-2 shadow' style={{width: '300px' , height:'300px',}}>
                            Quản lý Người dùng
                    </Link>
                    <Link className=' col-3 manager-3 shadow' to={'/approve'} style={{width: '300px' , height:'300px',}}>
                            Quản lý phê duyệt
                    </Link>
                </div>
            </div>
        </div>
    )
}
