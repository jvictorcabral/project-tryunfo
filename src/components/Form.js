import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form>
        <input data-testid="name-input" type='text'></input>
        <textarea data-testid="description-input"></textarea>
        <input data-testid="attr1-input" type='number'></input>
        <input data-testid="attr2-input" type='number'></input>
        <input data-testid="attr3-input" type='number'></input>
        <input data-testid="image-input" type='text'></input>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <input data-testid="trunfo-input" type='checkbox'></input>
        <button data-testid="save-button">Salvar</button>
      </form>
    )
  }
}

export default Form
