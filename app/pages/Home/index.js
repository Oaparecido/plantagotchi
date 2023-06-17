import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Link, useRouter} from "expo-router";

export default function Home() {
  const router = useRouter();

  const handlePress = () => {
    console.log('Pressed button!');
    router.push('/pages/register');
  };

  return (
      <View style={styles.container}>
        <Image
            source={require('../../assets/icon-home.png')}
            style={styles.iconMain}
        />

        <Text style={styles.txt}>
          <Text>PLANTA</Text>
          <Text style={styles.txtBold}>GOTCHI</Text>
        </Text>

        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <View style={styles.buttonContent}>
            <Image
                source={require('../../assets/icon-google.png')}
                style={styles.iconGoogle}
            />

            <Text>
              <Text style={styles.buttonText}>Enter with </Text>
              <Text style={(styles.buttonText, styles.txtBold)}>GOOGLE</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46593F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconMain: {
    width: 200,
    height: 200,
  },

  txt: {
    fontSize: 30,
    color: '#ffffff',
  },

  txtBold: {
    fontWeight: 'bold',
  },

  button: {
    width: 250,
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 5,
  },

  buttonText: {
    textAlign: 'center',
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconGoogle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
