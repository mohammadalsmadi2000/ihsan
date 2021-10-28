import * as Font from 'expo-font';

import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {combineReducers, createStore} from 'redux';

import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import MealsNavigator from'./navigation/MealsNavigator';
import {Provider} from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import {enableScreens} from 'react-native-screens';
import mealsReducer from './store/reducers/meals';

enableScreens();
const rootReducer=combineReducers({
  meals : mealsReducer
});

const store =createStore(rootReducer);


const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}


export default function App() {

const [fontLoaded,SetFontLoaded]=useState(false);

if(!fontLoaded){
  return<AppLoading
  startAsync={fetchFonts}
  onFinish={()=>SetFontLoaded(true)}
  onError={(err)=>console.log(err)}
  />
}

  return (
    <Provider store={store}>
   <MealsNavigator/>
   </Provider>

  );
}


