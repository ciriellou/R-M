import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.text}>Scopri quale personaggio di Rick e Morty ti assomiglia di più</Text>
      </View>
      <View>
        <Image
          style={styles.img}
          source={require('./assets/anziano.jpg')}
        />
        <Image
          style={styles.img}
          source={require('./assets/rick.jpeg')}
        />
      </View>
      <View>
          <Button title="SCOPRI A CHI ASSOMIGLI"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  body: {
    backgroundColor: 'rgb(36, 40, 47)',
    width:'100%',
    height:'100%',
    textAlign: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  img: {
    width: 200,
    height: 200
  }
  
});

export default App;
