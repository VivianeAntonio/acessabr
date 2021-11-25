import React from 'react'
import './curator.scss'
import curatorPhoto from '../../images/viviane-antonio.jpg'

function CuratorItem() {

    return(
        <div className='curator__container'>
            <div className='curator__photo'>
                <img src={curatorPhoto} alt='Foto da curadora Viviane Antonio da Silva'/>
            </div>
            <div className='curator__details'>
                <div>
                    <h3>Viviane Antonio da Silva</h3>
                    <h6>Curadoria</h6>
                </div>                
                <p>Desenvolvedora fullstack formada em Análise e Desenvolvimento de Sistemas.</p>
            </div>
        </div>
    )
}

export default CuratorItem