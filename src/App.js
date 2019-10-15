import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: ''
    }
  }

  render() {
    return (
      <Container>
        <Grid centered columns={3}>
          <Grid.Column>
            <Header
              as="h1"
              textAlign="center"
            >
              BMI Converter
            </Header>

            <div>
              <label>Weight(kg)</label>
              <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
            </div>

            <div>
              <label>Height(cm)</label>
              <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
            </div>

            <DisplayResult
              weight={this.state.weight}
              height={this.state.height}
            />
          </Grid.Column>
          
        </Grid>   
      </Container>
    );
  }
}

export default App;