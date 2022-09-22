import React from 'react'
import user1 from '../../../images/Tatuadores/user1.jpg'
import tatuador1 from '../../../images/Tatuadores/tatuador1.png'
import tatuador2 from '../../../images/Tatuadores/tatuador2.png'
import './LayoutsProfileU.scss'



export const LayoutsProfileU = () => {
  return (
      <div className='Content_profleUser'>
        <div className='FaceUser'>
          <div className='contImgUser'>
            <img className='User' src={user1} alt="" />
            <div className='contLa'>
              <a href=""><span className="material-symbols-outlined">edit</span> Editar</a>
            </div>
          </div>
          <div className='contInfoUser'>
            <h3>Laura Sofia</h3>
            <p>laurasofia1450@gmail.com</p>
            {/* <p>3145784958</p> */}
          </div>
        </div>
        <div className='InfoUser'>
          <h3>CITAS AGENDADAS</h3>
        </div>
        <div className='agendas'>
          <div className='contAgendas'>
            <div className='cit'>
              <img className='TatuadorC' src={tatuador2} alt="" />
              <div className='Calend'>
                <div className='infor'>
                  <p>Fecha : 31/12/2022</p>
                  <p>Hora : 6:00 pm</p>
                  <p>Direccion : cra5ta #20-52</p>
                  <button className='buttons_global_StyleTatto'>CANCELAR CITA</button>
                </div>
              </div>
            </div>

            <div className='cit'>
              <img className='TatuadorC' src={tatuador1} alt="" />
              <div className='Calend'>
                <div className='infor'>
                  <p>Fecha : 22/09/2022</p>
                  <p>Hora : 3:00 pm</p>
                  <p>Direccion : cra5ta #19-30</p>
                  <button className='buttons_global_StyleTatto'>CANCELAR CITA</button>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
  )
}
