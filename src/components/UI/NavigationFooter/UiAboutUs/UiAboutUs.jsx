import React from 'react'
import emailjs from '@emailjs/browser';

export const UiAboutUs = ({NameAbout,classSpanLogo,NameSpanLogo}) => {


const sendEmail = (event)=>{
    event.preventDefault();


    emailjs.sendForm('service_4mrciiq','template_mr2pmtq',event.target,'QiP2ouJ-zjh1PcZPE')
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

    return (
        <div className='AboutUs box'>
            <h2>{NameAbout}<span className={classSpanLogo}>{NameSpanLogo}</span></h2>
            <div className="content">
                <form onSubmit={sendEmail}>
                    <div className='email'>
                        <div className="text">Email</div>
                        <input type="text" name='user_email' required />
                    </div>
                    <div className='msg'>
                        <div className="text">Mensaje</div>
                        <textarea name='user_message'  cols="25" rows="2"  required ></textarea>
                    </div>
                    <div>
                        <button id="liveToastBtn" type='submit' className='buttons_global_StyleTatto' >Enviar</button>
                    </div>
                </form> 
            </div>
    </div>
    )
}
