import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import React from 'react';
import {useSelector} from 'react-redux'

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {props.navigation.navigate('MealDetail',{mealId:itemData.item.id})}}
      />
    );
  };

  const avalibleData=useSelector((state)=>state.meals.filteredMeals)
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = avalibleData.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
   <MealList  listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoryMealScreen;
