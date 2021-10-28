import{FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';
import Color from '../constant/Colors'
import HeaderButton from '../components/HeaderButtons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const CategoriesScreen=props=>{
    const renderGridItem=(itemData)=>{
        return(
            <CategoryGridTile color={itemData.item.color}  onSelected={()=>props.navigation.navigate('CategoryMeals',{'categoryId':itemData.item.id})} title={itemData.item.title} />
        )
    }
    
    return(
        <FlatList  keyExtractor={(item,index)=>item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem}/>
    );
}

CategoriesScreen.navigationOptions=(navData)=>{
    return{
    headerTitle:'Catigoreis',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <TouchableOpacity onPress={()=>navData.navigation.toggleDrawer() }>
          <Ionicons name="ios-menu" size={24} color="#ccc" />
 </TouchableOpacity>
</HeaderButtons>,
    headerStyle:{
        backgroundColor:Color.primaryColor
    },
    headerTintColor:'black',
    headerStyle:{
        backgroundColor:Color.primaryColor
    }
}}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150
    }
});

export default CategoriesScreen;