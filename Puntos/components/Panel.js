import React from 'react';
import { StyleSheet, Dimensions, Button, View} from 'react-native';

export default function Panel () {
    return (
        <View style={styles.botones}>
            <Button title="Lista" />
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