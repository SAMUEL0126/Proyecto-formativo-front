import React from 'react'
import { ImgTemplate } from '../.././ImgTemplate/ImgTemplate'
import imgServices from '../../../../images/Icons/Maquuina.png'
import imgServicesTwo from '../../../../images/Icons/Pirncings.png'


export const Home_Services = ({srcImg}) => {
    return (
        <div className='Tattooists_Services'>
            <div className='Title_Services'><h1 className='titleMP4'>NUESTROS SERVICIOS</h1></div>

            <div className='Services' >
                <div className='Services_content'>
                    <a href="/infoTatuajes"><ImgTemplate srcImg={imgServices}/></a>
                    <h1>Tatuajes</h1>
                </div>

                <div className='Services_content'>
                    <a href="/infoPiercings"><ImgTemplate srcImg={imgServicesTwo}/></a>
                    <h1>piercings</h1>
                </div>
            </div>   

        </div>
    )
}
