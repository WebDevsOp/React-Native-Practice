import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const FlatListScreen = () => {
    const javascript_frameworks = [
        { name: 'Node.js' },
        { name: 'React.js' },
        { name: 'Express.js' },
        { name: 'Angular.js' },
        { name: 'React-Native' },
    ];
    return (
        <FlatList
            data={javascript_frameworks}
            keyExtractor={(element) => (0 | Math.random() * 9e6).toString(36)}
            renderItem={({ item }) => {
                // console.log(item.name);
                console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));
                return (
                    <Text>{item.name}</Text>
                )
            }}
        />
    )
}


export default FlatListScreen

const styles = StyleSheet.create({})
