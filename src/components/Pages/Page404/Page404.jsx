import React from 'react'
import error404 from '../../../images/Tattos/tatto5.jpg'
import './Page404.scss'


export const Page404 = () => {
    return (
        <div className='Error404'>
            <div className='Content_img_Error404'>
                <img src={error404} alt="" />
            </div>
            <div className='Content_text_Error404'>
                <h1>404</h1>
                <div className='separator'></div>
                <h3>PÁGINA PERDIDA</h3>
                <p>Oops!</p>
                <li><a className='volver' href="/">VOLVER AL INICIO</a></li>
             
            </div>
        </div>
    )
}
