import {Text, View, StyleSheet} from 'react-native';
import Profile from '../Profile';

const Pet = () => {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: '#46593F',
  },
});

export default Pet;
