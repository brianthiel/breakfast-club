import React from 'react'
import Button from './Button'
import '../styles/numbers.css'

class Numbers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="numbers">
        <Button value="AC" className="button-dark-gray" />
        <Button value="+/-" className="button-dark-gray" />
        <Button value="%" className="button-dark-gray" />
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="0" className="button-gray button-double"/>
        <Button value="." />
      </div>
    );
  }
}

export default Numbers
