import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions} from 'react-native';

export default function MiMap () {
    return (
        <MapView style={styles.mapa} />
    )
}

const styles = StyleSheet.create({
    mapa:{
        height: Dimensions.get('window').height - 60,
        width: Dimensions.get('window').width,
    }
})