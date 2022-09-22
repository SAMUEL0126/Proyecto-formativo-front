import React from 'react'


export const Home_MainView = () => {
    return (
        <section className='MainView'>
                <h1 className='titleMP4'>CONTAMOS HISTORIAS</h1>
                    <h2 className='titleMP4'>EN TU PIEL</h2>
                <p>¿ No tienes una cuenta ?</p>
                <div>
                    <ul className="menuhorizontal">
                        <li><a className='buttons_global_StyleTatto' href="/IngresarSesion">INICIAR SESION</a></li>
                    </ul>
                    <ul className="menuhorizontal">
                        <li>
                            <ul className='buttons_global_StyleTatto'>REGISTRATE COMO</ul>
                            <ul className="menuvertical">
                                <li><a href="/RegistroUsuario">USUARIO</a></li>
                                <li><a href="/RegistroArtista">ARTISTA</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
        </section>
    )
}
