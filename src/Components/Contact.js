import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/sea' className='ui hearder'>Sea</Link>
                <p>Kiếp con người mỏng manh như là gió  <br></br>
                    Sống trên đời có được mấy lần vui<br></br>
                    Sao phải đau mà không thể mỉm cười<br></br>
                    Gắng buông nỗi ngậm ngùi nơi quá khứ</p>
            </div>
            <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/ocean' className='ui hearder'>Ocean</Link>
                <p>Kiếp con người mỏng manh như là gió<br></br>
                    Sống trên đời có được mấy lần vui<br></br>
                    Sao phải đau mà không thể mỉm cười<br></br>
                    Gắng buông nỗi ngậm ngùi nơi quá khứ</p>
            </div>
            <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/seaocean' className='ui hearder'>SeaOCean</Link>
                <p>Kiếp con người mỏng manh như là gió<br></br>
                    Sống trên đời có được mấy lần vui<br></br>
                    Sao phải đau mà không thể mỉm cười<br></br>
                    Gắng buông nỗi ngậm ngùi nơi quá khứ</p>
            </div>
        </div>
    )
}
export default Contact;