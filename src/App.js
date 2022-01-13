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
      cardAtt1: 0,
      cardAtt2: 0,
      cardAtt3: 0,
      cardRare: '',
      cardTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAtt1,
      cardAtt2,
      cardAtt3,
      cardRare,
      cardTrunfo } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAtt1={ cardAtt1 }
          cardAtt2={ cardAtt2 }
          cardAtt3={ cardAtt3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAtt1={ cardAtt1 }
          cardAtt2={ cardAtt2 }
          cardAtt3={ cardAtt3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
