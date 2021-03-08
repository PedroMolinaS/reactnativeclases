import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MiMap from './components/MiMap';
import MiModal from './components/MiModal';
import Panel from './components/Panel';

// import {Map, Modal} from './components';


export default function App() {
  return (
    <View style={styles.container}>
      <MiModal></MiModal>
      <MiMap></MiMap>
      <Panel></Panel>
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
