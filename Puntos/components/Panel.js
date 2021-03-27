import React from 'react';
import { StyleSheet, Dimensions, Button, View} from 'react-native';

export default function Panel ({handleLista, textLista}) {
    return (
        <View style={styles.botones}>
            <Button title={textLista} onPress={handleLista} />
            <Button title="Mostrar/Ocultar" />
        </View>
    )
}

const styles = StyleSheet.create({
    botones: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',    
        // backgroundColor: '#eee',
    }
})