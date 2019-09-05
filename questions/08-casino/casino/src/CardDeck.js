import React, { useState, useEffect } from 'react';


function CardDeck() {
    const [suits] = useState(['hearts', 'diamonds', 'clubs', 'spades'])
    const [values] = useState([2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'])
    const [deck, setDeck] = useState([])

    const createDeck = () => {
        let result = [];

        for (let suit of suits) {
            for (let value of values) {
                let newObject = {};
                newObject[suit] = value;
                result.push(newObject)
            }
        }
        addItem(result);
    }
    
    const addItem = (result) => {
        setDeck([...deck, ...result])
    }

    useEffect(() => {
        createDeck(deck);
    }, [])

    return (
        <div>
            This is the: {deck.length}
        </div>
    )
}

export default CardDeck;