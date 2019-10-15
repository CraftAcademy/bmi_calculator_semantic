import React, { Component } from 'react';
import DisplayResult from './Components/DisplayResult';
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react'
import NavBar from './Components/NavBar'
import MethodSelect from './Components/MethodSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }


  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <NavBar />
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
                <label>Weight({
                  this.state.method === "metric" ? "kg" : "lbs"
                })</label>
                <input name="weight" value={this.state.weight} onChange={this.onChangeHandler} />
              </div>

              <div>
                <label>Height({
                  this.state.method === "metric" ? "cm" : "inc"
                })</label>
                <input name="height" value={this.state.height} onChange={this.onChangeHandler} />
              </div>

              <MethodSelect
                onChangeHandler={this.onChangeHandler}
              />

              <DisplayResult
                weight={this.state.weight}
                height={this.state.height}
                method={this.state.method}
              />


            </Grid.Column>

          </Grid>
        </Container>
      </>
    );
  }
}

export default App;