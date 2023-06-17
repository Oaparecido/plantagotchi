import React from 'react';
import {StyleSheet, View} from 'react-native';
import Profile from '../Profile';
import ChooseName from './ChooseName';
import BasicInformation from './BasicInformation';
import SelectPet from './SelectPet';

const Register = () => {
  return (
    <View style={styles.container}>
      <Profile />

      <ChooseName />
      <BasicInformation />
      <SelectPet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 140,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#46593F',
  },
});

export default Register;
