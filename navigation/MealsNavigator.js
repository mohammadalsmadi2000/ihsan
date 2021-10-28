import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from'../screens/CategoryMealsScreen';
import Color from '../constant/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FilterScreen';
import { Ionicons } from '@expo/vector-icons'
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native'
import React from 'react';
import {Text} from 'react-native'
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const defaultNav={
    
            headerTitle:'a Screen',
            headerTintColor:'black',
            headerTitleStyle:{
                fontFamily:'open-sans-bold'
            },
            headerBackTitleStyle:{
                fontFamily:'open-sans-bold'
            }
    
}

const MealsNavigator=createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeals:{
        screen:CategoryMealsScreen
    },
    MealDetail: MealDetailScreen

},{
    defaultNavigationOptions:defaultNav
}
);

const FavNavigator =createStackNavigator({
    Favorites:FavoritesScreen,
    MealDetail:MealDetailScreen
},{
    defaultNavigationOptions:defaultNav
})

const tabScreenConfig={Meal:{screen:MealsNavigator,navigationOptions:{
    tabBarLabel:'Meals (^_^)',
    tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-restaurant' size={24}color={tabInfo.tintColor} />
    },tabBarColor:Color.primaryColor,
    tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}> Meals</Text>
}},
Fav:
{
    screen:FavNavigator,
    navigationOptions:{
    tabBarLabel:'Favorites!',
    tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-star' size={24}color={tabInfo.tintColor} />
    },tabBarColor:Color.accentColor
}}
}

const MealTab= Platform.OS==='android'?createMaterialBottomTabNavigator(tabScreenConfig,{
   activeColor:'white',
   shifting:true,
   barStyle:{
       backgroundColor:Color.primaryColor
   }
}): createBottomTabNavigator ({
    tabScreenConfig
}
    ,{
    tabBarOptions:{
    activeTintColor:Color.accentColor
}
});

const FilterNavigator=createStackNavigator({
    Filters:FiltersScreen
},{
    navigationOptions:{
        drawerLabel:'Filters!!'
    },
    defaultNavigationOptions:defaultNav
});


const MainNavigator=createDrawerNavigator({
    MealsFavs:{screen:MealTab,navigationOptions:{
        drawerLabel:'Meals'
    }},
    Filters:FilterNavigator
},{
    contentOptions:{
        activeTintColor:Color.accentColor,
        lableStyle:{
            fontFamily:'open-sans-bold'
        }
    }
});



export default createAppContainer(MainNavigator);