import React from 'react';
import { connect } from 'react-redux';

let nextWordId = 0;

let AddWord = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(
          {
            type: 'ADD_WORD',
            id: nextWordId++,
            text: this.value
          }
        );
        input.value = '';
      }}>
        Add Word
      </button>
    </div>
  );
};
export default connect()(AddWord);

