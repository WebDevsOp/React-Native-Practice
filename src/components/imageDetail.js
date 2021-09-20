import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
const ImageDetail = ({ title, imageURL }) => {
    return (
        <View>
            <Text>{title}</Text>
            <img src={imageURL} alt={title} style={tw`w-20 h-[20px]`} />
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({
    image_djkd: {
        width: 100,
        height: 100,
    }
})
