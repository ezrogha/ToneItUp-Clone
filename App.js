import React, { Component, useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import App from './src/navigation'

const fetchFonts = async () => {
  await Font.loadAsync({
    "amsterdam": require("./assets/fonts/RainbowBridgePersonalUse-ERae.ttf")
  })
}

export default class MyProgram extends Component {

  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    console.log('componentDidMount')
    await Font.loadAsync({
      "amsterdam": require("./assets/fonts/BeautyMountains.ttf")
    })
    this.setState({ isFontLoaded: true })
  }

  render() {
    if (!this.state.isFontLoaded) {
      return (
        <AppLoading />
      )
    }
    return (
      <App />
    )
  }
};
