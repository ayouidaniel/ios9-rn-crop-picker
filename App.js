import React, { Component } from 'react'
import { Button, Image, StyleSheet, View} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

export default class App extends Component {
  state = { image: null }

  _openImagePicker = () => {
    ImagePicker.openPicker({
      includeBase64: true,
      mediaType: 'photo',
      compressImageQuality: 0.4,
      loadingLabelText: "Custom Loading..."
    })
    .then(image => this.setState( { image } ))
    .catch(e => console.log(e))
  }

  _renderImages = () => {
    if (this.state.image) {
      return [
        <Image key={1} style={styles.image} source={{ uri: this.state.image.path}} />,
        <Image key={2} style={styles.image} source={{ uri: this.state.image.sourceURL}} />,
        <Image key={3} style={styles.image} source={{ uri: `data:${this.state.image.mime};base64,${this.state.image.data}`}} />,
        <Image key={4} style={styles.image} source={{uri : 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'}} />
      ]
    } else {
      return <Image style={styles.image} source={{uri : 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'}} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="Choose images" onPress={this._openImagePicker}/>
        </View>
        <View style={[styles.container]}>
          {this._renderImages()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'gray',
    width: 150,
    marginLeft: 110,
    marginTop: 70,
    marginBottom: 25
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 110,
    margin: 10,
  }
})
