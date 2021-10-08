import React from "react";
import { StyleSheet } from "react-native";

const useStyles = () =>
StyleSheet.create({

    container:{
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '14px',
    },
    button:{
        height: 70,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 14
    }

})

export default useStyles