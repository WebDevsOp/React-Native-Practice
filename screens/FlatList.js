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
            keyExtractor={(element) => Array(N + 1).join((Math.random().toString(36) + '8523548461655498').slice(2, 18)).slice(0, N)
            }
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
