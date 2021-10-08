import React from "react";
import { View, Text} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import useStyles from './styles';
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

const Header = ({title}) =>{
    const styles = useStyles()
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => navigation.openDrawer()}>
                <Feather name='menu' size={36} color='#FFF'/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header