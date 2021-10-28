import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';

import CATEGORIES from '../data/dummy-data';
import React from 'react';

const CategoryGridTile=props=>{
    let TouchableCmp=TouchableOpacity;
    if(Platform.OS==='android'&& Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback;
    }
return (
    <View style={styles.gridItem}>
<TouchableCmp style={{flex:1}} onPress={props.onSelected}>
<View style={{...styles.screen,...{backgroundColor:props.color}}}>
    <Text style={styles.text} numberOfLines={2} > {props.title}</Text>
</View>
</TouchableCmp>
</View>
)
}

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        overflow:'hidden',
        elevation:5
    },
    screen:{
        padding:10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        flex:1,
        borderRadius:10,
        shadowOpacity:0.26,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
    },
    text:{
        fontSize:24,
        fontFamily:'open-sans-bold',
        textAlign:'right'
    }

})

export default CategoryGridTile;