import React from "react";
import {
    View,
    Text
} from 'react-native'
import styled from "./css";

//Componentes de estudos
import MinMax from "./components/MinMax";



export default () => {
    




    return(
        <View style={styled.App}>
            <MinMax min={1} max={5}/>
        </View>
    )
}