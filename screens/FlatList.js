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
<<<<<<< HEAD
            keyExtractor={(element) => (0 | Math.random() * 9e6).toString(36)}
=======
            keyExtractor={(element) => Array(N + 1).join((Math.random().toString(36) + '8523548461655498').slice(2, 18)).slice(0, N)
            }
>>>>>>> a0d66911d247adfd835d2d6821058b158a3ef5fc
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
