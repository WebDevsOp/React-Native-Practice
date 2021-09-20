import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { javascript_frameworks } from '../constants/constants'
const FlatListScreen = (props) => {
    return (
        <FlatList
            data={javascript_frameworks}
            keyExtractor={(element) => (0 | Math.random() * 9e6).toString(36)}
            renderItem={({ item }) => {
                // console.log((0 | Math.random() * 9e6).toString(36));
                return (
                    <Text style={styles.textStyle}>Name : {item.name} -- Popularity : {item.popularity}</Text>
                )
            }}
        />
    )
}


export default FlatListScreen

const styles = StyleSheet.create({
    textStyle: {
        marginVertical : 50,
        marginHorizontal : 50,
    },
});
