import React , {useState} from 'react'
import imgP from '../../../images/Tatuadores/tatuador1.png'
import img1 from '../../../images/Tattos/portafolio1.jpg'
import img2 from '../../../images/Tattos/portafolio2.jpg'
import img3 from '../../../images/Tattos/portafolio10.jpg'
import img4 from '../../../images/Tattos/portafolio4.jpg'
import img5 from '../../../images/Tattos/portafolio5.jpg'
import img6 from '../../../images/Tattos/portafolio6.jpg'

import '../LayoutsProfileT/LayoutsProfileT.scss'
import '../../../scss/base/_global.scss'

export const LayoutsProfileT = () => {
    
    //  C O N T A D O R    D E    M E   G U S T A

    const [contador, setContador] = useState(0)

    const count = () => {setContador(1)}

    // A R R A Y S   A P I  T A T U A D O R

    const tatuador = [
        {
            tatu: imgP,
            id: 1
        },
        ]

    // A R R A Y S   A P I   P O R T A F O L I O

    const imagenes = [
        {
            img: img1,
            id: 1
        },
        {
            img: img2,
            id: 2
        },
        {
            img: img3,
            id:3
        },
        {
            img: img4,
            id: 4
        },
        {
            img: img5,
            id: 5
        },
        {
            img: img6,
            id:6
        }
    ]


    const [tempimg, setTempimg] = useState('')

    const getImg = (img , tatu) => {
        const modaL = document.getElementById('modalImg')
        modaL.style.visibility = "visible"
        setTempimg(img)
    }

    const ocultarModal =() => {
        const modaL = document.getElementById('modalImg')
        modaL.style.visibility = "hidden" 
    }

    const ocultarImageUp= () => {
        const modaL = document.getElementById('contmodalUp')
        modaL.style.visibility = "hidden"
    }
    const confirmUp = () => {
        const modaL = document.getElementById('contmodalUp')
        modaL.style.visibility = "hidden"

    }

    const imageUp =() => {
        const modaL = document.getElementById('contmodalUp')
        modaL.style.visibility ="visible"

    }


  return (
    <div className='contPather'>


        <div className='contPe'>   
                <div className='ProfileArtistic'>
                {tatuador.map((person, index) => {
                    return(
                    <div className='contImg'><img key={index} className='Profile' src={person.tatu} alt=""/></div>
                    )
                    })}
                    <div className='infArtist'>
                    <div className='editSeparator'>
                            <div className='editProfile'><a  onClick={() => imageUp()}  href="#"><span className="material-symbols-outlined">edit</span>Editar</a></div>
                            <div><label className='labelNameArtist'>Nombre</label><p>Carlos Melo Toca</p></div>
                            <div><label className='labelNameArtist'>Correo</label><p>CorreoPrueba@StyleTatto.co</p></div>
                            <div className='favoriteSymbols'
                                ><span onClick={count} className="material-symbols-outlined">favorite</span>
                                <p>{contador}</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className='contInfo'>
                    <div className='infoDescription'>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Dolores tempore 
                            aperiam dolor sit.
                        </p>
                    </div>
                    <div className='contButtons'>
                        <button className='buttons_global_StyleTatto'>Agendar cita</button>
                    </div>
                </div>
        </div>
        <div className ='ContTrabajos'>
            <div className='contPortafolio'>
                <div className='contPortafolio2'>
                    <div className='Portafolio'>
                        <h2 className='PortafoliosTittle'>P R O Y E C T O S </h2>
                        <span onClick={() => imageUp()} className="material-symbols-outlined">file_upload <p>adjuntar</p></span>
                    </div>
                    <div className='Trabajos'>
                        <div className='Tattos'>
                            <div className='Tatto'>
                                {imagenes.map((imagen, index) => {
                                    return(
                                        <div className='contImageT'>
                                            <img onClick={() => getImg(imagen.img)} key={index} className='ContTatto' src={imagen.img} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div id='modalImg' className='modalImg'>
            <div className='contModal'>
                <img className='imge' src={tempimg} alt="" />
                <svg id='close' onClick={() => ocultarModal()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
        </div>
        

        <div id='contmodalUp' className='modalImg'>
            <div className='contButtonUp'>
                <h2>Añade tu trabajo</h2>
                <div id='contaianputUp' className='buttons_global_StyleTatto'>
                    <p >Añadir</p>
                    <input className='confirmarUp' type="file" />
                </div>
                <svg id='close' onClick={() => ocultarImageUp()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <button onClick={() => confirmUp()} id='btnConfirmar' className='buttons_global_StyleTatto'>Confirmar</button>
            </div>
        </div>

    </div>
  )
}