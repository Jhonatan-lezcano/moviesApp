import {View, Text} from 'react-native';
import React from 'react';
import {splashScreen} from './styles';

const SplashScreen = () => {
  return (
    <View style={splashScreen.container}>
      <Text style={splashScreen.text}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
