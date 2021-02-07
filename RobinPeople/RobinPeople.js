import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MoneyButton from './MoneyButton';
import simulateIntensiveTask from './obfuscatedFunctions';

const RobinPeople = () => {
    const [price, setPrice] = useState(0);

    const handlePress = async () => {
        const seconds = await simulateIntensiveTask();
        console.log(seconds);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text style={styles.title}>RobinPeople</Text> */}
            <View style={styles.priceContainer}>
                {/* <Text>DOGE</Text>
                <Text style={styles.price}>{price}</Text> */}
                <MoneyButton title="Start Intensive Task" onPress={handlePress}/>
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