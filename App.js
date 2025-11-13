import React from 'react'; import { Provider } from 'react-redux'; import { NavigationContainer } from '@react-navigation/native'; import { createStackNavigator } from '@react-navigation/stack'; import { store } from './src/store'; import ProductListScreen from './src/screens/ProductListScreen'; import CartScreen from './src/screens/CartScreen'; const Stack = createStackNavigator(); export default function App(){ return (<Provider store={store}><NavigationContainer><Stack.Navigator initialRouteName='Products'><Stack.Screen name='Products' component={ProductListScreen} /><Stack.Screen name='Cart' component={CartScreen} /></Stack.Navigator></NavigationContainer></Provider>); }
/**
* App.js
* Main application entry point
* Sets up Redux Provider and Navigation
*/
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import AppNavigator from './src/navigation/AppNavigator';
const App = () => {
return (
// Provider makes Redux store available to all components
<Provider store={store}>
{/* Set status bar style */}
<StatusBar barStyle="light-content" />
{/* Main app navigation */}
<AppNavigator />
</Provider>
);
};
export default App;
