import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React,{useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import HeaderButton from '../components/HeaderButtons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {toggleFavorite} from'../store/actions/meals'

const ListItem=props=>{
  return(<View style={styles.listItem}>
  <Text>{props.children}</Text>
  </View>)
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const avalibleData=useSelector(state=>state.meals.meals);
  const selectedMeal = avalibleData.find(meal => meal.id === mealId);

  const dispatch= useDispatch();
  const toggleFavoriteHandler=useCallback(()=>{
    dispatch(toggleFavorite(mealId));
  },[dispatch,mealId]);
  
  useEffect(()=>{
    //props.navigation.setParams({mealTitle:selectedMeal.title})
    props.navigation.setParams({toggleFav:toggleFavoriteHandler})
  },[toggleFavoriteHandler])
  
  return (
    <ScrollView>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
    <View style={styles.details}>
            <Text>{selectedMeal.duration}m</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.textTitle}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient=> <ListItem key={ingredient}>{ingredient}</ListItem>)}
        <Text style={styles.textTitle}>Steps</Text>
        {selectedMeal.steps.map(steps=> <ListItem key={steps}>{steps}</ListItem>)}
    
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle= navigationData.navigation.getParam('mealTitle')
  const togglefavorite=navigationData.navigation.getParam('toggleFav')
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <TouchableOpacity onPress={togglefavorite}>
       <Ionicons name="ios-star" size={24} color="red" />
       </TouchableOpacity>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
 image:{
  width:'100%',
  height:200
 },details:{
   flexDirection:'row',
   padding:15,
   justifyContent:'space-around'
 },textTitle:{
   fontFamily:'open-sans',
   fontSize:22,
   textAlign:'center'
 },
 listItem:{
marginVertical:10,
marginHorizontal:20,
borderColor:'#ccc',
borderWidth:1,
padding:10
 }
});

export default MealDetailScreen;
