import React from 'react'
import '../ContQuotes/ContQuotes.scss'

export const ContQuotes = () => {
  return (
    <div className='backgruondCont'>
        <div className='ShadowCont'>
            <form className='FormQuot'>
                <h3>Introduce la Informacion</h3>
                <p>Fecha</p>
                <input className='input_global_style' type="date" required />
                <br />
                <h3>Hora</h3>
                <input type="time"/>
                <div className='buttons_global_StyleTatto' id='addfile'>
                    <p>Muestranos tu idea</p>
                    <input id='btnEnviar' type="file" required/>
                </div>
                <p>Dejanos un mensaje</p>
                <textarea id="textMessage" ></textarea>
                <button className='buttons_global_StyleTatto'>Enviar</button>
            </form>
        </div>
    </div>
  )
}
