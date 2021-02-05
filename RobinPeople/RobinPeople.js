import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MoneyButton from './MoneyButton';

const RobinPeople = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>RobinPeople</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>$0.00</Text>
                <MoneyButton title="Update"/>
            </View>
        </SafeAreaView>
    );
}

export default RobinPeople;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    priceContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 30,
    },
    price: {
        fontSize: 75,
        fontWeight: "bold",
        marginBottom: 15,
    },
});