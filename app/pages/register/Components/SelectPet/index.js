import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PetCard from './PetCard';
import Carousel from 'react-native-snap-carousel';
import {useRouter} from "expo-router";

const SelectPet = ({navigation}) => {
  const router = useRouter();

  const onPress = () => {
    console.log("on press");
    router.push('/pages/pet');
  };

  const data = [
    {id: 1, firstName: 'BONNEY ', secondName: 'SHERMAN'},
    {id: 2, firstName: 'TYLER ', secondName: 'BLOB'},
    {id: 3, firstName: 'DANIEL ', secondName: 'DOGUINHO'},
  ];

  const renderCarouselItem = ({item}) => {
    return <PetCard firstName={item.firstName} secondName={item.secondName} />;
  };

  return (
    <View style={[styles.mainContainer, styles.mt40]}>
      <Text style={styles.asStart}>
        <Text style={[styles.txt20, styles.txtWhite]}>SELECT YOUR </Text>
        <Text style={[styles.txt20, styles.txtWhite, styles.txtBold]}>
          PET:
        </Text>
      </Text>

      <Carousel
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={350}
        itemWidth={190}
      />

      <TouchableOpacity
        style={[
          styles.mt40,
          styles.ph90,
          styles.pv10,
          styles.backWhite,
          styles.br5,
        ]}
        onPress={onPress}>
        <Text>
          <Text style={[styles.txt20, styles.txtGreen]}>REGISTER MY </Text>
          <Text style={[styles.txt20, styles.txtGreen, styles.txtBold]}>
            PET
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtWhite: {color: '#fff'},

  txtGreen: {color: '#46593F'},

  txt20: {fontSize: 20},

  txtBold: {fontWeight: 'bold'},

  mt40: {marginTop: 40},

  mt20: {marginTop: 20},

  mt5: {marginTop: 5},

  h50: {height: 50},

  w50: {width: 50},

  br5: {borderRadius: 5},

  ph90: {paddingHorizontal: 90},

  pv10: {paddingVertical: 10},

  backWhite: {backgroundColor: '#fff'},

  aiCenter: {alignItems: 'center'},

  asStart: {alignSelf: 'flex-start'},
});

export default SelectPet;
