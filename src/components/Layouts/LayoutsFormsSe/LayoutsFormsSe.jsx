import React from 'react'
import './LayoutsFormsSe.scss'

export const LayoutsFormsSe = () => {
    return (
        <div className="Content_FormsPrincipal BackGround">
            <div className="Content_Forms">
                <form>
                    <h1>INICIO DE SESION</h1>
                        <div className="inputContent">
                            <input className='input_global_style' required type="text" />
                            <label className='label_global_style' >Nombre Usuario</label>
                        </div>
                        <div className="inputContent">
                            <input className='input_global_style' required type="password" />
                            <label className='label_global_style'>Contraseña </label>
                        </div>
                        <div>
                            <button className="buttons_global_StyleTatto">Iniciar sesión</button>
                        </div>
                    <div className= "questions">
                        <a href="#"> ¿A olvidado Su contraseña? </a>
                        <a href="/">¿No tienes una Cuenta?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
