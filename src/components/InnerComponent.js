import React from 'react';
import Draggable from './Draggable';

class InnerComponent extends React.Component {
  render() {
    const style = {
      width: '100px',
      height: '100px',
      background: 'grey',
      border: '1px solid black'
    }
    return (
      <div style={style}>
        I am thing
      </div>
    )
  }
}

export default Draggable(InnerComponent);