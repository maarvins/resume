import './contact.css'
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault() //utilizando para quando clicar no btn submit nao dar refresh na pagina
        emailjs.sendForm('service_oyre5bx', 'template_1cngpy7', formRef.current, 'user_aUpxughc8hZNvvEFbQkLt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>    
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Quer falar a respeito do seu projeto? Vamos lá!</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img 
                                    src={Phone} 
                                    alt="" 
                                    className="c-icon" 
                                />
                                +55 31 99703-7152
                            </div>
                            <div className="c-info-item">
                                <img 
                                    src={Email} 
                                    alt="" 
                                    className="c-icon" 
                                />
                                    maarvins.19@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img 
                                    src={Address} 
                                    alt="" 
                                    className="c-icon" 
                                />
                                    Entre em contato para nos localizarmos!
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Qual é a sua história?</b> Entre em contato. Estamos sempre disponíveis caso o projeto certo apareça!
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Nome' name="user_name" />
                            <input type="text" placeholder='Subject' name="user_subject" />
                            <input type="text" placeholder='Email' name="user_email" />
                            <textarea rows="5" placeholder='Mensagem' name="message"/>
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact      