import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const ImageDetail = ({ title, imageURL }) => {
    return (
        <View>
            <Text>{title}</Text>
            <img src={imageURL} alt={title} />
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({})
