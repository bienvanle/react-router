import React from 'react'
import './Modal.css'

const About = () => {
    return (
        <div>
            <div className='wapper'>
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>Đây là modal </h3>
                    </div>
                </div>
            </div>
            <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <h3 className='ui hearder'>About</h3>
                <p>Chào mừng bạn đã đến với trang mô tả của chúng tôi</p>
            </div>
        </div>
    )
}
export default About;