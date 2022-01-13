import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAtt1,
      cardAtt2,
      cardAtt3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <input
          type="text"
          data-testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />

        <textarea
          data-testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <input
          type="number"
          data-testid="attr1-input"
          name="cardAtt1"
          value={ cardAtt1 }
          onChange={ onInputChange }
        />

        <input
          type="number"
          data-testid="attr2-input"
          name="cardAtt2"
          value={ cardAtt2 }
          onChange={ onInputChange }
        />

        <input
          type="number"
          data-testid="attr3-input"
          name="cardAtt3"
          value={ cardAtt3 }
          onChange={ onInputChange }
        />

        <input
          type="text"
          data-testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <select
          ata-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAtt1: PropTypes.number.isRequired,
  cardAtt2: PropTypes.number.isRequired,
  cardAtt3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
