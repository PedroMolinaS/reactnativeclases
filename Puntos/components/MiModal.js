import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';


export default function MiModal () {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <View style={styles.modal}>
                <View style={styles.content}>
                    <Text>Soy un Modal</Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
