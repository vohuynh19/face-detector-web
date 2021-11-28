import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceDetector from './components/FaceDetector/FaceDetector';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particleOption = {
  particles: {
    line_linked: {
      shadow: {
        enabled: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }

}

const app = new Clarifai.App({
  apiKey: '4433d30d54f2448fa87537df9c014f6a'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      rounding: {
      }
    }
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        const roundingbox = this.getRounding(response.outputs[0].data.regions[0].region_info.bounding_box);
        this.setState({
          rounding: roundingbox,
        });
      })
      .catch(err => console.log(err));
  }
  getRounding = (boundingBox) => {
    const faceImg = document.getElementById('faceImg');
    const width = Number(faceImg.width);
    const height = Number(faceImg.height);
    return {
      top: boundingBox.top_row * height,
      left: boundingBox.left_col * width,
      bottom: (1 - boundingBox.bottom_row) * height,
      right: (1 - boundingBox.right_col) * width
    };
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOption}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceDetector imgUrl={this.state.imgUrl} rounding={this.state.rounding} />
      </div>
    );
  }
}

export default App;
