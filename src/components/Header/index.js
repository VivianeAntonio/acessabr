import React from "react";
import 'style';
import logoAcessaBr from '../../images/logo-acessabr.svg'
import logoEbac from '../../images/logo-ebac.svg'

const Header = () => {
    return(
        <header className="header__container">
            
            <div className="header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBR"/>
                <span className="header__city"> 
                    / São Paulo - SP 
                </span>

            </div>

            <div className="header__logo--ebac">
                <span>
                     Apoio: 
                </span>
                <img src={logoEbac} alt="Logo EBAC"/>
            </div>

        </header>
    )
}

export default Header;