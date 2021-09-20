import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../components/imageDetail'
import {javascript_frameworks} from '../constants/constants'
const ImageScreen = () => {
    return(
        javascript_frameworks.map(function(element){
            return <ImageDetail title={element.name} key={(0 | Math.random() * 9e6).toString(36)} imageURL={element.imageURL} />
        })
    )
}

export default ImageScreen

const styles = StyleSheet.create({

})
