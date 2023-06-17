import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const ChooseName = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>
          <Text style={[styles.txt20, styles.txtWhite]}>TYPE: </Text>
          <Text style={[styles.txt30, styles.txtBold, styles.txtWhite]}>
            SUCULENTA
          </Text>
        </Text>

        <Text style={styles.mt20}>
          <Text style={[styles.txt20, styles.txtWhite]}>CHOOSE A </Text>
          <Text style={[styles.txt20, styles.txtWhite, styles.txtBold]}>
            NAME:
          </Text>
        </Text>

        <TextInput
          style={[
            styles.h40,
            styles.w235,
            styles.backWhite,
            styles.ph10,
            styles.br5,
            styles.mt5,
          ]}
          placeholder="Digite algo..."
          onChangeText={setText}
          value={text}
        />
      </View>
      <View>
        <Image
          source={require('../../../imgs/icon-real-plant.png')}
          style={[styles.w100, styles.h120, styles.asEnd]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  txtWhite: {color: '#fff'},

  txt20: {fontSize: 20},

  txtBold: {fontWeight: 'bold'},

  txt30: {fontSize: 30},

  ml10: {marginLeft: 10},

  mt20: {marginTop: 20},

  mt5: {marginTop: 5},

  h40: {height: 40},

  h120: {height: 120},

  w100: {width: 100},

  w235: {width: 235},

  backWhite: {backgroundColor: '#fff'},

  ph10: {paddingHorizontal: 10},

  br5: {borderRadius: 5},
});

export default ChooseName;
