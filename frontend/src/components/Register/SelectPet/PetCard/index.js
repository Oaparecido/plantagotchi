import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PetCard = ({firstName, secondName}) => {
  const onPress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={[styles.container, styles.br5]}>
      <View
        style={[
          styles.w150,
          styles.h170,
          styles.backWhite,
          styles.aiCenter,
          styles.jcCenter,
          styles.mt20,
          styles.br5,
        ]}>
        <Image
          source={require('../../../../imgs/icon-pet.png')}
          style={[styles.w85, styles.h110]}
        />
      </View>
      <Text style={[styles.mt5]}>
        <Text style={[styles.txt15, styles.txtWhite]}>{firstName} </Text>
        <Text style={[styles.txt15, styles.txtWhite, styles.txtBold]}>
          {secondName}
        </Text>
      </Text>

      <TouchableOpacity
        style={[
          styles.ph10,
          styles.pv5,
          styles.back416904,
          styles.br5,
          styles.mb5,
          styles.mt5,
        ]}
        onPress={onPress}>
        <Text style={[]}>
          <Text style={[styles.txtWhite]}>SELECT </Text>
          <Text style={[styles.txtWhite, styles.txtBold]}>THIS</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    backgroundColor: '#749069',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  txtWhite: {color: '#fff'},

  txt15: {fontSize: 15},

  txt20: {fontSize: 20},

  txtBold: {fontWeight: 'bold'},

  m0: {margin: 0},

  mt20: {marginTop: 20},

  mt5: {marginTop: 5},

  mb5: {marginBottom: 5},

  h110: {height: 110},

  h170: {height: 170},

  w85: {width: 85},

  w150: {width: 150},

  br5: {borderRadius: 5},

  pv5: {paddingVertical: 5},

  ph10: {paddingHorizontal: 10},

  backWhite: {backgroundColor: '#fff'},

  back416904: {backgroundColor: '#416904'},

  aiCenter: {alignItems: 'center'},

  jcCenter: {justifyContent: 'center'},
});

export default PetCard;
