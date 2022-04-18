import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Movie} from '../../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}

const MovieCard = ({
  movie,
  height = 420,
  width = 300,
  marginHorizontal,
}: Props) => {
  const {poster_path} = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('MovieScreen', movie)}
      activeOpacity={0.8}
      style={[styles.container, {height, width, marginHorizontal}]}>
      <View style={styles.posterContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  posterContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,

    elevation: 5,
  },
  posterImage: {
    flex: 1,
    borderRadius: 18,
  },
});
