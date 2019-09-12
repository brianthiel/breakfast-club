import React from 'react';

function Card(props) {
    const cardDivStyle = {
        height: '150px',
        width: '100px',
        border: '1px solid black',
    }

    return (
        <div style={cardDivStyle} >
            {Object.values(props.card)}
            <br/>
            {Object.keys(props.card)}
        </div>
    )
}

export default Card;