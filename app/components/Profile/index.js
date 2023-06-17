import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.fixedElement}>
      <Image
        source={require('../../assets/icon-profile.png')}
        style={styles.iconProfile}
      />

      <Text style={styles.txt}>
        <Text style={styles.txtBold}>Hi, </Text>
        <Text>Daniel</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedElement: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'baseline',
    top: 60,
    left: 20,
  },

  iconProfile: {
    borderRadius: 100,
    width: 50,
    height: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },

  txt: {
    marginLeft: 10,
    fontSize: 20,
    color: '#fff',
    paddingBottom: 10,
  },

  txtBold: {
    fontWeight: 'bold',
  },
});

export default Profile;
