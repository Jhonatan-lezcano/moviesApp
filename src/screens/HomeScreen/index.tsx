import React from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import useMovies from '../../hooks/useMovies';
import MovieCard from '../../components/MovieCard/index';
import HorizontalSlider from '../../components/HorizontalSlider/index';

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upComing} = useMovies();
  const sliderWidth = Dimensions.get('window').width; // window dimensions

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}) => (
              <MovieCard movie={item} marginHorizontal={2} />
            )}
            sliderWidth={sliderWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title="Populares" data={popular} height={260} />
        <HorizontalSlider title="Top reted" data={topRated} height={260} />
        <HorizontalSlider title="Up coming" data={upComing} height={260} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  carouselContainer: {
    height: 440,
  },
});
