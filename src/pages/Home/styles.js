import React from "react";
import { StyleSheet } from "react-native";

const useStyles = () =>
StyleSheet.create({
    container:{
        backgroundColor:'#141a29',
        flex: 1,
        padding: 4
    },
    searchContainer:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        padding: 14,
        marginBottom: 8,
    },
    input:{
        backgroundColor: 'rgba(255,255,255, 0.4)',
        width: '85%',
        height: 50,
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 14,
        fontSize: 18,
        color: '#FFF'
    },
    searchButton:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },


})

export default useStyles