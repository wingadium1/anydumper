
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';

const AnyDumper = StackNavigator({
    Home: {screen: Home},
});

AppRegistry.registerComponent('AnyDumper', () => AnyDumper);