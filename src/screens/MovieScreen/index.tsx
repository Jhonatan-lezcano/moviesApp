import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParams} from '../../navigation/StackNavigation';
import useMovieDetail from '../../hooks/useMovieDetail';
import MovieDetails from '../../components/MovieDetails';

const heightPoster = Dimensions.get('screen').height;

interface Props
  extends NativeStackScreenProps<RootStackParams, 'MovieScreen'> {}

const MovieScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, movieFull, cast} = useMovieDetail(movie.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>
      <TouchableOpacity
        style={styles.buttonGoBack}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" color="white" size={40} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
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
  buttonGoBack: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
});
