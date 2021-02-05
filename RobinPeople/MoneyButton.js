import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MoneyButton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default MoneyButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        borderRadius: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
    },
});