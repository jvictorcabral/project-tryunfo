import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAtt1,
      cardAtt2,
      cardAtt3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <h3
          data-testid="name-card"
        >
          { cardName }
        </h3>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />

        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAtt1 }</span>
        <span data-testid="attr2-card">{ cardAtt2 }</span>
        <span data-testid="attr3-card">{ cardAtt3 }</span>
        <span data-testid="rare-card">{ cardRare }</span>
        {
          cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : <p />
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAtt1: PropTypes.number.isRequired,
  cardAtt2: PropTypes.number.isRequired,
  cardAtt3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
