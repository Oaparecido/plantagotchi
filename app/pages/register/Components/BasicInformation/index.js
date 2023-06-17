import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const BasicInformation = () => {
  return (
    <View style={[styles.mainContainer, styles.mt20]}>
      <View style={[styles.aiCenter]}>
        <Image
          source={require('../../../../assets/icon-sun.png')}
          style={[styles.w50, styles.h50]}
        />
        <Text style={[styles.txt20, styles.txtWhite, styles.mt5]}>
          DIFFUSED
        </Text>
      </View>

      <View style={[styles.aiCenter]}>
        <Image
          source={require('../../../../assets/icon-drop-water.png')}
          style={[styles.w50, styles.h50]}
        />
        <Text style={styles.mt5}>
          <Text style={[styles.txt20, styles.txtWhite]}>7 - 10 </Text>
          <Text style={[styles.txt20, styles.txtWhite, styles.txtBold]}>
            DAYS
          </Text>
        </Text>
      </View>

      <View style={[styles.aiCenter]}>
        <Image
          source={require('../../../../assets/icon-thermometer.png')}
          style={[styles.w50, styles.h50]}
        />
        <Text style={styles.mt5}>
          <Text style={[styles.txt20, styles.txtWhite]}>20º - 30º</Text>
          <Text style={[styles.txt20, styles.txtWhite, styles.txtBold]}>C</Text>
        </Text>
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

  mt20: {marginTop: 20},

  mt5: {marginTop: 5},

  h50: {height: 50},

  w50: {width: 50},

  aiCenter: {alignItems: 'center'},
});

export default BasicInformation;
