import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare } = this.state;
      const maxIndividual = 90;
      const maxAll = 210;

      if (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxAll
      || cardAttr1 === 0
      || Number(cardAttr1) > maxIndividual
      || Number(cardAttr1) < 0
      || cardAttr2 === 0
      || Number(cardAttr2) > maxIndividual
      || Number(cardAttr2) < 0
      || cardAttr3 === 0
      || Number(cardAttr3) > maxIndividual
      || Number(cardAttr3) < 0
      || cardRare === '') {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare };

    this.setState(({ cards }) => ({
      cards: [...cards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    }));
    if (cardTrunfo && !hasTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  render() {
    const {
      cards,
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <main>
        <section className="section1">
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>

        {/* Consegui fazer o requisito 8 com a ajuda do Tiago Lourinho */}
        <section>
          <h1 className="saved-cards">Cartas Salvas</h1>
          <div className="div-section2">
            {cards.map((card) => (
              <div key={ card.name }>
                <Card
                  key={ card.name }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardImage={ card.cardImage }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
              </div>
            ))}
          </div>

        </section>
      </main>
    );
  }
}

export default App;
