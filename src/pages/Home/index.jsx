import React from 'react'
import { View, Text, Button} from 'react-native'
import Header from '../../components/Header'
import useStyles from './styles';
import {Feather} from '@expo/vector-icons'
import { SearchBar } from 'react-native-screens';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const Home = () =>{
const styles = useStyles()
    return(
        <View style={styles.container}>
            <Header title='React Prime'/>
            <View style={styles.searchContainer}>
                <TextInput 
                    placeholder='bom dia'
                    placeholderTextColor='#000000'
                    style={styles.input}
                    
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Feather name="search" size={30} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;