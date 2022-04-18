import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams} from '../../navigation/StackNavigation';

const heightPoster = Dimensions.get('screen').height;

interface Props
  extends NativeStackScreenProps<RootStackParams, 'MovieScreen'> {}

const MovieScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.containerImage}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  containerImage: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 10,
    height: heightPoster * 0.7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },

  posterImage: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  subTitle: {
    fontSize: 18,
    opacity: 0.8,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});
