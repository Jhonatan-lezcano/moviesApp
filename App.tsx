import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useMovies from './src/hooks/useMovies';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const {isLoading} = useMovies();
  if (isLoading) return <SplashScreen />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
