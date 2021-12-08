import React from 'react'
import Button from './Button'
import '../styles/controls.css'
import controls from '../data/controls.json'

class Controls extends React.Component {
  constructor(props) {
    super(props)
  }

 render() {
  return (
    <div className="controls">
      {controls.map((button, i) => {
          return (
            <Button
              key={i}
              value={button.value}
              className={button.className}
              hideValue={button.hideValue}
            />
          )
        })}
    </div>
  );
 }
}

export default Controls
