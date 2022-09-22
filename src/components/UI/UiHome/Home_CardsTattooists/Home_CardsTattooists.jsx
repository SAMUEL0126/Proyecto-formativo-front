import React from 'react'
import './Home_CardsTattooists.scss'

export const Home_CardsTattooists = ({ImgTattooists,NameTattooists,SocialTattooists}) => {
    return (
        <div className='pather'>
            <div className="container">
                <div className="cardsTattooists">
                    <div className="face facel">
                        <div className="content">
                            <img src={ImgTattooists} alt={ImgTattooists} />
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p className='nameTattooists' >{NameTattooists}</p>
                            <p className='descripTattooists'href="/">{SocialTattooists}</p>
                            <a href="/perfilTatuadores" className='btnA_menu'>Ver Mi Perfil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
