import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MiMap from './components/MiMap';
import MiModal from './components/MiModal';
import Panel from './components/Panel';

// import {Map, Modal} from './components';


export default function App() {

  const [puntos, setPuntos] = useState([]);

  const handleLongPress = ({nativeEvent}) => {
    // console.log(nativeEvent);
    let newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate})
    setPuntos(newPuntos)
  }
  console.log(puntos);

  return (
    <View style={styles.container}>
      <MiMap onLongPress={handleLongPress} />
      <Panel></Panel>
      <MiModal visible={true}>
        <Text>Soy un Modal</Text>
      </MiModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
