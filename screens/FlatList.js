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
            renderItem={({ item }) => {
                console.log(item.name);
            }}
        />
    )
}


export default FlatListScreen

const styles = StyleSheet.create({})
