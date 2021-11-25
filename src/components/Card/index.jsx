import React from 'react'
import './card.scss'
import Button from '../Button'
import iconAudio from '../../images/icon-audio-descricao.png'
import iconBanheiro from '../../images/icon-banheiro-acessivel.png'
import iconBraile from '../../images/icon-braile.png'
import iconCaoguia from '../../images/icon-caoguia.png'
import iconElevador from '../../images/icon-elevador.png'
import iconEstacionamento from '../../images/icon-estacionamento.png'
import iconLibras from '../../images/icon-libras.png'
import iconPiso from '../../images/icon-piso-tatil.png'
import iconPorta from '../../images/icon-porta-larga.png'
import iconRampa from '../../images/icon-rampa.png'



const Card = () => {
    return (
        <div className='card__container'>
            <div className='card__image'></div>
            <div className='card__content'>
                <h3>Nome do local</h3>
                <ul className='card__facilities'>
                    <li className='card__facilities__item'>
                        <img 
                            src={iconBraile}
                            alt='Sinalização em Braile'
                            title='Sinalização em Braile' />
                    </li>

                    <li className='card__facilities__item card__facilities__item--unchecked'>
                        <img 
                            src={iconAudio}
                            alt='Audio descrição'
                            title='Audio descrição' />
                    </li>

                    <li className='card__facilities__item'>
                        <img 
                            src={iconBanheiro}
                            alt='Banheiro acessivel'
                            title='Banheiro acessivel' />
                    </li>

                    <li className='card__facilities__item'>
                        <img 
                            src={iconElevador}
                            alt='Elevador para cadeirante'
                            title='Elevador para cadeirante' />
                    </li>
                    
                    <li className='card__facilities__item'>
                        <img 
                            src={iconEstacionamento}
                            alt='Estacionamento para idosos e deficientes'
                            title='Estacionamento para idosos e deficientes' />
                    </li>

                    <li className='card__facilities__item'>
                        <img 
                            src={iconCaoguia}
                            alt='Permite acesso de cão guia'
                            title='Permite acesso de cão guia' />
                    </li>

                    <li className='card__facilities__item'>
                        <img 
                            src={iconPiso}
                            alt='Piso tátil de alerta'
                            title='Piso tátil de alerta' />
                    </li>

                    <li className='card__facilities__item'>
                        <img 
                            src={iconPorta}
                            alt='Portas de acesso largas'
                            title='Portas de acesso largas' />
                    </li>

                    <li className='card__facilities__item'>
                        <img 
                            src={iconRampa}
                            alt='Rampas de acesso para cadeirante'
                            title='Rampas de acesso para cadeirante' />
                    </li>

                    <li className='card__facilities__item'>
                        <img 
                            src={iconLibras}
                            alt='Atendimento em Libras'
                            title='Atendimento em Libras' />
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button>Como chegar</Button>
            </div>

        </div>
    )
}

export default Card;