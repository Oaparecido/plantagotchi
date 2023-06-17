import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Profile from '../../components/Profile';
import {useRouter} from "expo-router";

export default function Pet() {
  const router = useRouter();

  const handlePress = () => {
    console.log("onpress");
    router.push('pages/health')
  };

  return (
    <View style={styles.container}>
      <Profile />

      <View style={styles.petElement}>
        <Image
          style={styles.balloon}
          source={require('../../assets/icon-balloon.png')}
        />
        <Image style={styles.pet} source={require('../../assets/icon-pet.png')} />
      </View>

      <TouchableOpacity
          style={[
            styles.mt40,
            styles.ph90,
            styles.pv10,
            styles.backWhite,
            styles.br5,
          ]}
          onPress={handlePress}>
        <Text>
          <Text style={[styles.txt20, styles.txtGreen]}>SEE THE </Text>
          <Text style={[styles.txt20, styles.txtGreen, styles.txtBold]}>
            HEALTH
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
    marginTop: 60,
  },

  pet: {
    width: 350,
    height: 450,
  },

  mt40: {marginBottom: 30},

  ph90: {paddingHorizontal: 113},

  pv10: {paddingVertical: 10},

  br5: {borderRadius: 5},

  backWhite: {backgroundColor: '#fff'},

  txtGreen: {color: '#46593F'},

  txt20: {fontSize: 15},

  txtBold: {fontWeight: 'bold'},
});
