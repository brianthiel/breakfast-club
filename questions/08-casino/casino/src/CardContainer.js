import React, { useState, useEffect } from 'react';
import Card from './Card';

function CardContainer(props) {
    const cardContainerStyles = {
        display: 'inline-block',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        border: '1px gold solid',
        width: '100px',
        margin: '10px'
    }

    return props.deck.map(card => {
        return (
            <div style={cardContainerStyles}>
                <Card card={card}/>
            </div>
        )
    })
}

export default CardContainer;