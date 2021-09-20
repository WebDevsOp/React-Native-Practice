import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
    console.log(navigation);
    return (
        <View style={styles.homeScreen}>
            {/* <Text style={styles.text}>Hi There ! </Text> */}
            <TouchableOpacity onPress={() => { navigation.navigate('List') }} >
                <Text style={styles.text}>Go to List Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Components') }} >
                <Text style={styles.text}>Go to ComponentScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('ImageScreen') }} >
                <Text style={styles.text}>Go to Image Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    homeScreen: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})
