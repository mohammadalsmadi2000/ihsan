import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButtons'
import { Ionicons } from '@expo/vector-icons';
import MealList from '../components/MealList';
import React from 'react';
import {TouchableOpacity} from 'react-native'
import{useSelector} from 'react-redux'

const FavoritesScreen=props=>{
    
    const favMeals = useSelector(state => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
}


FavoritesScreen.navigationOptions=(navData)=>{
    return{
    headerTitle:'Catigoreis',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <TouchableOpacity onPress={()=>navData.navigation.toggleDrawer() }>
          <Ionicons name="ios-menu" size={24} color="red" />
 </TouchableOpacity>
</HeaderButtons>,
    
}}


export default FavoritesScreen;