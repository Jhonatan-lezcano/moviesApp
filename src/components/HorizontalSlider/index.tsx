import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {styles} from './styles';
import MovieCard from '../MovieCard/index';
import {Movie} from '../../interfaces/movieInterface';

interface Props {
  title?: String;
  data: Movie[];
  height?: number;
}

const HorizontalSlider = ({title, data, height = 220}: Props) => {
  return (
    <View style={{height: height}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={data}
        keyExtractor={(item: any, index) =>
          item.id ? item.id.toString() : index
        }
        renderItem={({item}) => (
          <MovieCard
            movie={item}
            height={200}
            width={140}
            marginHorizontal={2}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
