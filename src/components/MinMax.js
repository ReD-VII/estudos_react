import React from "react";
import { View, Text } from 'react-native'
export default (props) =>{
    const aleatorio = Math.floor(Math.random() * props.max) + props.min 
    return(
        <View>
            <Text>Os valores informados foram Min: {props.min} e Max: {props.max}</Text>
            <Text>O valor aleatorio entre eles e: {aleatorio}</Text>
        </View>
    )
}