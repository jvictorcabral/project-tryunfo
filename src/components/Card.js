import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="div-card">
        <h1
          data-testid="name-card"
        >
          { cardName }
        </h1>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />

        <p data-testid="description-card">
          Description:
          { cardDescription }
        </p>
        <span data-testid="attr1-card">
          Attr01:
          { cardAttr1 }
        </span>
        <span data-testid="attr2-card">
          Attr02:
          { cardAttr2 }
        </span>
        <span data-testid="attr3-card">
          Attr03:
          { cardAttr3 }
        </span>
        <span data-testid="rare-card">
          Rarity:
          { cardRare }
        </span>
        {
          cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : <span />
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
