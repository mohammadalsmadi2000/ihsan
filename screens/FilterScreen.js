import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import React,{useCallback, useEffect, useState} from 'react';
import{StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';

import HeaderButton from '../components/HeaderButtons';
import { Ionicons } from '@expo/vector-icons';

const FilterSwitch=props=>{
  
    return(
            <View style={styles.filterContainer}>
                <Text style={styles.title}>{props.lable}</Text>
                <Switch

                    value={props.state}
                    onValueChange={props.onChange}
                />
            </View>
    )
}

const FilterScreen=props=>{
    const {navigation}=props;
    const [gluten,setGluten]=useState(false);
    const [lactose,setLactose]=useState(false);
    const [vegan,setVegan]=useState(false);
    const [vegetaran,setVegetaran]=useState(false);

    const SaveFilters=useCallback(()=>{
        const appliedFilters={
            glutenFree:gluten,
            lactoseFree:lactose,
            isVegan:vegan,
            isVegetaran:vegetaran
        }
        console.log(appliedFilters)

    },[gluten,lactose,vegan,vegetaran]);

    useEffect(()=>{
       navigation.setParams({save: SaveFilters});
    },[SaveFilters])


    return(
        <View style={styles.screen}>
            <FilterSwitch
                lable="Gluten-free"
                state={gluten}
                onChange={(newValue)=>setGluten(newValue)}
            />
             <FilterSwitch
                lable="Lactose-free"
                state={lactose}
                onChange={(newValue)=>setLactose(newValue)}
            />
             <FilterSwitch
                lable="Vegan"
                state={vegan}
                onChange={(newValue)=>setVegan(newValue)}
            />
            <FilterSwitch
                lable="Vegetaran"
                state={vegetaran}
                onChange={(newValue)=>setVegetaran(newValue)}
            />
        </View>
    );
}
FilterScreen.navigationOptions=(navData)=>{
    return{
    headerTitle:'Filters Meals',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <TouchableOpacity onPress={()=>navData.navigation.toggleDrawer() }>
          <Ionicons name="ios-menu" size={24} color="red" />
 </TouchableOpacity>
</HeaderButtons>,
headerRight:( <HeaderButtons HeaderButtonComponent={HeaderButton}>
<TouchableOpacity onPress={navData.navigation.getParam('save')}>
      <Ionicons name="ios-save" size={24} color="red" />
</TouchableOpacity>
</HeaderButtons>)
,
    headerStyle:{
        backgroundColor:'#368dff'
    },
    headerTintColor:'black',
    headerStyle:{
        backgroundColor:'#368dff'
    }
}}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },title:{
        fontFamily:'open-sans',
        fontSize:22,
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        width:'80%',
        marginVertical:10
    }
});

export default FilterScreen;