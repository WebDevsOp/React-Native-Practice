import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title='Increase' onPress={() => {
                setCounter(prevState => prevState + 1)
                // console.log(counter);
        }}
            />
            <Button title='Decrease' onPress={() => {
                setCounter(prevState => prevState - 1)
                // console.log(counter);
            }}
            />
            <h1>Current Count is : {counter}</h1>
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({})
