import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import MiMap from './components/MiMap';
import MiModal from './components/MiModal';
import Panel from './components/Panel';

export default function App() {

  const [puntos, setPuntos] = useState([]);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [nombre, setNombre] = useState("");
  const [visible, setVisible] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    // console.log(nativeEvent);
    // let newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    // setPuntos(newPuntos)
    setPuntoTemp(nativeEvent.coordinate)
    setVisible(true)
  }
  // console.log(puntos);
  const handleChangeText = (text) => {
    // console.log("soy HandleChangeText");
    setNombre(text);
  }

  return (
    <View style={styles.container}>
      <MiMap onLongPress={handleLongPress} />
      <Panel></Panel>
      <MiModal visible={visible}>
        <Input
          title="Soy un Titulo"
          placeholder="Aquí digita tu nombre completo"
          onChangeText={handleChangeText}
        />
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
