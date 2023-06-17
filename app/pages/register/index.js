import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChooseName from './Components/ChooseName';
import BasicInformation from './Components/BasicInformation';
import SelectPet from './Components/SelectPet';
import Profile from "../../components/Profile";

export default function Page() {
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
