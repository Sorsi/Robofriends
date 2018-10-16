import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '12px solid orange',
        height: '550px'
      }}>
      {props.children}
    </div>
  );
};

export default Scroll;