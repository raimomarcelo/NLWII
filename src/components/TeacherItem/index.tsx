import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/11845330?s=460&u=d82de26a3da2a8dd4785946e6789ef6a4dc68ef8&v=4" alt="Marcelo Raimo"/>
        <div>
            <strong>
                Marcelo Raimo
            </strong>
            <span>
                SAP SFSF Consultant
            </span>
        </div>
        </header>
        <p>
        Atualmente trabalho como Consultor de Implementação, SAP SuccessFactors. Grande experiência na implementação do módulo Recruiting Management, Recruiting Marketing e no processo de Atração & Seleção e Desenvolvimento de Pessoas em empresas de grande porte. 
        <br/><br/>
        Experiências também nos módulos Employee Central, People Profile, Performance Goals, Succession Development, Learning, SAP-Jam.
        </p>
        <footer>
            <p>
             Preço/hora
             <strong>
                 R$ 95,00
             </strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;