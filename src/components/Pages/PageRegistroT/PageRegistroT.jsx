import React from 'react'
import './PageRegistroT.scss'

export const PageRegistroT = () => {
  return (
    <div>
         <div className="Content_FormsPrincipal BackGroundFormA">
            <div className="Content_Forms">
                <form>
                    <h1>REGISTRO ARTISTAS</h1>
                        <div className="inputContent">
                            <input className='input_global_style' required type="text" />
                            <label className='label_global_style' >Nombre Usuario</label>
                        </div>
                        <div className="inputContent">
                            <input className='input_global_style' required type="text" />
                            <label className='label_global_style' >Correo electronico</label>
                        </div>
                        <div className="inputContent">
                            <input className='input_global_style' required type="password" />
                            <label className='label_global_style'>Contraseña </label>
                        </div>
                        <div>
                            <button className="buttons_global_StyleTatto">Registrarse</button>
                        </div>
                        <div className= "questions">
                            <a href="/">¿Ya tienes una Cuenta?</a>
                        </div>
                </form>
            </div>
        </div>

    </div>
  )
}
