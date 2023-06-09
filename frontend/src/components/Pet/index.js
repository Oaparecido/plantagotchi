import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Profile from '../Profile';

const Pet = () => {
  return (
    <View style={styles.container}>
      <Profile />

      <View style={styles.petElement}>
        <Image
          style={styles.balloon}
          source={require('../../imgs/icon-balloon.png')}
        />
        <Image style={styles.pet} source={require('../../imgs/icon-pet.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#46593F',
    flex: 1,
  },

  petElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  balloon: {
    width: 150,
    height: 150,
  },

  pet: {
    width: 350,
    height: 450,
  },
});

export default Pet;
