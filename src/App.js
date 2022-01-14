import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    }, () => this.onSaveButtonClick());
  }

  onSaveButtonClick() {
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
      this.setState({ disable: true });
    } else {
      this.setState({ disable: false });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
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
          disable={ disable }
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
      </div>
    );
  }
}

export default App;
