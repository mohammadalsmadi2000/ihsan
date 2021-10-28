import React from 'react';
import {View,Text,StyleSheet} from 'react-native';




const Header=props=>{
    
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );
}


const styles=StyleSheet.create({
    headerStyle:{
        width:'100%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    headerText:{
        fontSize:24,
        color:'white'
    }
})


export default Header;