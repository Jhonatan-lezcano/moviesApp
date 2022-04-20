import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardCast: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',

    height: 70,
    marginRight: 15,
    paddingRight: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
  },

  photoActor: {
    borderRadius: 10,
    height: '100%',
    width: 70,
  },

  infoActor: {
    height: '100%',
    justifyContent: 'center',
    marginLeft: 10,
  },
  nameActor: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
