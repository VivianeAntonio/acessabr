import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types' 

const Pills = ({ local, onClick, selected }) => {
    return (
        <div onClick={onClick} className={`pills__container ${selected} ? 'pill__container--active' : ''}`}>
            { local }

        </div>
    )
}

Pills.PropTypes = {
    local: PropTypes.string.isRequired, 
    onClick: PropTypes.func,
    selected: PropTypes.bool
}
export default Pills;