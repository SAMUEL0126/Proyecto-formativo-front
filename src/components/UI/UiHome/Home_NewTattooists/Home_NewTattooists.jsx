import React from 'react'
import '../Home_NewTattooists/Home_NewTattooists.scss'


import { Home_CardsTattooists } from '.././Home_CardsTattooists/Home_CardsTattooists'
import ImgTattooistsOne from '../../../.././images/Tatuadores/tatuador1.png'
import ImgTattooistsTwo from '../../../.././images/Tatuadores/tatuador2.png'
import ImgTattooistsThree from '../../../.././images/Tatuadores/tatuador3.png'




export const Home_NewTattooists = () => {
    return (
        <section className='NewTattooists'>
            <div className='contArtistas'>
                <h1 className='titleMP4'>ARTISTAS</h1>
            </div>
            <div className='contCards'>
                <Home_CardsTattooists  ImgTattooists={ImgTattooistsOne}  NameTattooists='Dairon' SocialTattooists='Soy Dairon Granada Sor Artista del tatuaje mis estilos princiales son : Realista, Blackwork'/>
                <Home_CardsTattooists  ImgTattooists={ImgTattooistsTwo}  NameTattooists='Lorem' SocialTattooists='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum alias est delectus culpa?'/>
                <Home_CardsTattooists  ImgTattooists={ImgTattooistsThree}  NameTattooists='lorem2' SocialTattooists='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia tempora eveniet alias?'/>
            </div>
            <div className='SeeTattooists'><a className='buttons_global_StyleTatto' href="/artistas">VER MAS</a></div>
        </section>

    )
}
