import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MovieFull} from '../../interfaces/movieInterface';
import {Cast} from '../../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <View>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        <Text style={styles.title}>Historia</Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={styles.title}>Presupuesto</Text>
        <Text>{movieFull.budget}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});
