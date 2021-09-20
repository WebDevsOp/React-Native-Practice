import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const FlatListScreen = (props) => {
    const javascript_frameworks = [
        { name: 'Node.js' , popularity:'100%' },
        { name: 'React.js' , popularity:'90%' },
        { name: 'Express.js' , popularity:'95%' },
        { name: 'Angular.js' , popularity:'75%' },
        { name: 'React-Native' , popularity:'80%' },
        { name: 'MongoDB' , popularity:'85%' },
        { name: 'Vue.js' , popularity:'60%' },
    ];
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
