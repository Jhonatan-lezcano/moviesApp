import {View, Text, Image} from 'react-native';
import React from 'react';
import {Cast} from '../../interfaces/creditsInterface';
import {styles} from './stylesCastItem';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.cardCast}>
      {actor.profile_path && <Image source={{uri}} style={styles.photoActor} />}
      <View style={styles.infoActor}>
        <Text style={styles.nameActor}>{actor.name}</Text>
        <Text>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;
