import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import Profile from '../../components/Profile';
import {useRouter} from "expo-router";

const Page = () => {
  const labels = [
    {id: '1', textNormal: '4 hours/day ', textBold: 'SUN'},
    {id: '2', textNormal: 'water once a ', textBold: 'WEEK'},
    {id: '3', textNormal: 'well drained ', textBold: 'SOIL'},
    {id: '4', textNormal: 'do not soak the ', textBold: 'EARTH'},
    {id: '5', textNormal: 'small ', textBold: 'VASES'},
    // Adicione mais labels conforme necessário
  ];

  const router = useRouter();

  const handlePress = () => {
    router.push('/pages/pet');
  };

  return (
    <View style={styles.container}>
      <Profile />

      <TouchableOpacity
          style={[
            styles.mt40,
            styles.ph90,
            styles.pv10,
            styles.backWhite,
            styles.br5,
              styles.w50,
          ]}
          onPress={handlePress}>
        <Text>
          <Text style={[styles.txt20, styles.txtGreen]}>SEE THE </Text>
          <Text style={[styles.txt20, styles.txtGreen, styles.txtBold]}>
            PET
          </Text>
        </Text>
      </TouchableOpacity>
      <View>
        <Text>
          <Text style={styles.txt}>TYPE: </Text>
          <Text style={[styles.txt, styles.txtBold]}>SUCULENTA</Text>
        </Text>
        <Text style={styles.txtWithMargin}>
          <Text style={[styles.txt, styles.txtBigger]}>MARIA </Text>
          <Text style={[styles.txt, styles.txtBigger, styles.txtBold]}>
            BONITINHA
          </Text>
        </Text>
        <Text style={styles.txtWithMargin}>
          <Text style={[styles.txt, styles.txtSmaller]}>NEEDS TO </Text>
          <Text style={[styles.txt, styles.txtSmaller, styles.txtBold]}>
            HEALTH
          </Text>
        </Text>

        <FlatList
          data={labels}
          renderItem={({item}) => (
            <View style={styles.tag}>
              <Text>
                <Text style={[styles.txtSmaller, styles.txtTag]}>
                  {item.textNormal}
                </Text>
                <Text
                  style={[styles.txtSmaller, styles.txtTag, styles.txtBold]}>
                  {item.textBold}
                </Text>
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      <View>
        <Text style={styles.txtWithMargin}>
          <Text style={styles.txt}>DASH</Text>
          <Text style={[styles.txt, styles.txtBold]}>BOARD</Text>
        </Text>
        <View style={styles.elementsFirst}>
          <View style={styles.cardMoisture}>
            <Text style={styles.txtInnerCardMargin}>
              <Text style={styles.txtInnerCard}>moisture </Text>
              <Text style={[styles.txtInnerCard, styles.txtBold]}>INDEX</Text>
            </Text>
            <Text
              style={[
                styles.txtInnerCard,
                styles.txtNumberCardMoisture,
                styles.txtBold,
              ]}>
              545
            </Text>
          </View>
          <View style={styles.cardDioxide}>
            <Text style={styles.txtInnerCardMargin}>
              <Text style={styles.txtInnerCard}>carbon dioxide </Text>
              <Text style={[styles.txtInnerCard, styles.txtBold]}>
                CONCENTRATION
              </Text>
            </Text>
            <Text
              style={[
                styles.txtInnerCard,
                styles.txtNumberCardDioxide,
                styles.txtBold,
              ]}>
              199.4
            </Text>
            <Image
              style={styles.imageArrows}
              source={require('../../assets/icon-arrows.png')}
            />
          </View>
        </View>
        <View style={styles.alignElements}>
          <View style={styles.elementsLeft}>
            <View style={styles.cardSunExposure}>
              <Text style={styles.txtInnerCardMargin}>
                <Text style={styles.txtInnerCard}>sun exposure </Text>
                <Text style={[styles.txtInnerCard, styles.txtBold]}>TIME</Text>
              </Text>
              <View style={styles.innerCardSunExposure}>
                <View style={styles.alignTxtInnerCardLeft}>
                  <Text
                    style={[styles.txtInnerCard, styles.txtInnerCardSmaller]}>
                    7pm
                  </Text>
                  <Text
                    style={[styles.txtInnerCard, styles.txtInnerCardSmaller]}>
                    12am
                  </Text>
                  <Text
                    style={[styles.txtInnerCard, styles.txtInnerCardSmaller]}>
                    7am
                  </Text>
                </View>
                <View style={styles.alignGraph}>
                  <View style={styles.alignCenter}>
                    <View style={styles.blockSunday} />
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtInnerCardSmaller,
                        styles.txtBold,
                      ]}>
                      sun
                    </Text>
                  </View>

                  <View style={styles.alignCenter}>
                    <View style={styles.blockMonday} />
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtInnerCardSmaller,
                        styles.txtBold,
                      ]}>
                      mon
                    </Text>
                  </View>

                  <View style={styles.alignCenter}>
                    <View style={styles.blockTuesday} />
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtInnerCardSmaller,
                        styles.txtBold,
                      ]}>
                      tue
                    </Text>
                  </View>

                  <View style={styles.alignCenter}>
                    <View style={styles.blockWednesday} />
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtInnerCardSmaller,
                        styles.txtBold,
                      ]}>
                      wed
                    </Text>
                  </View>

                  <View style={styles.alignCenter}>
                    <View style={styles.blockThursday} />
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtInnerCardSmaller,
                        styles.txtBold,
                      ]}>
                      thu
                    </Text>
                  </View>

                  <View style={styles.alignCenter}>
                    <View style={styles.blockFriday} />
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtInnerCardSmaller,
                        styles.txtBold,
                      ]}>
                      fri
                    </Text>
                  </View>

                  <View style={styles.alignCenter}>
                    <View style={styles.blockSaturday} />
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtInnerCardSmaller,
                        styles.txtBold,
                      ]}>
                      sat
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.alignNutrientsAndWatering}>
              <View style={styles.cardNutrients}>
                <Text style={styles.txtInnerCardMargin}>
                  <Text style={[styles.txtInnerCard]}>amount of </Text>
                  <Text style={[styles.txtInnerCard, styles.txtBold]}>
                    NUTRIENTS
                  </Text>
                </Text>
                <View style={styles.alignInnerCardNutrients}>
                  <Text
                    style={[
                      styles.txtInnerCard,
                      styles.txtNumberCardNutrients,
                      styles.txtBold,
                    ]}>
                    <Text>50</Text>
                    <Text style={[styles.txtInnerCard, styles.txtBold]}>%</Text>
                  </Text>
                  <View style={styles.blockCardNutrients} />
                </View>
              </View>
              <View style={styles.cardWatering}>
                <Text style={[styles.txtInnerCardMargin]}>
                  <Text style={styles.txtInnerCard}>next </Text>
                  {'\n'}
                  <Text style={[styles.txtInnerCard, styles.txtBold]}>
                    WATERING
                  </Text>
                </Text>
                <Text style={[styles.alignCenter, styles.txtInnerAlign]}>
                  <Text>
                    <Text style={[styles.txtInnerCard]}>in</Text>
                    <Text
                      style={[
                        styles.txtInnerCard,
                        styles.txtBold,
                        styles.txtNumberCardWatering,
                      ]}>
                      10
                    </Text>
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.elementRight}>
            <View style={styles.cardPhSoil}>
              <Text style={[styles.txtInnerCardMargin]}>
                <Text style={styles.txtInnerCard}>ph </Text>
                <Text style={[styles.txtInnerCard, styles.txtBold]}>SOIL</Text>
              </Text>
              <View style={styles.phSoilIndex}>
                <Text style={styles.alignNumberFromPhInCenter}>
                  <Text
                    style={[styles.txtBold, styles.txtBigger, styles.txtWhite]}>
                    9
                  </Text>
                  <Text style={[styles.txtBold, styles.txtWhite]}>,0</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  mt40: {marginBottom: 5},

  ph90: {paddingHorizontal: 10},

  pv10: {paddingVertical: 10},

  br5: {borderRadius: 5},

  w50: {width: 113},

  backWhite: {backgroundColor: '#fff'},

  txtGreen: {color: '#46593F'},

  txt20: {fontSize: 15},

  container: {
    flex: 1,
    backgroundColor: '#46593F',
    paddingTop: 120,
    paddingLeft: 20,
    paddingRight: 20,
  },

  txt: {
    color: '#fff',
    fontSize: 20,
  },

  txtBold: {
    fontWeight: 'bold',
  },

  txtBigger: {
    fontSize: 40,
  },

  txtSmaller: {
    fontSize: 15,
  },

  txtWithMargin: {
    marginTop: 10,
  },

  txtTag: {
    color: '#46593F',
    fontSize: 12,
  },

  tag: {
    marginTop: 5,
    marginRight: 5,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },

  columnWrapper: {
    justifyContent: 'flex-start',
  },

  elementsFirst: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardMoisture: {
    backgroundColor: '#fff',
    width: 90,
    height: 110,
    borderRadius: 5,
  },

  txtInnerCardMargin: {
    marginTop: 5,
    marginLeft: 5,
  },

  txtInnerCard: {
    color: '#46593F',
    fontSize: 15,
  },

  txtNumberCardMoisture: {
    textAlign: 'right',
    fontSize: 40,
    marginTop: 25,
    marginRight: 3,
  },

  cardDioxide: {
    width: 230,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  txtNumberCardDioxide: {
    textAlign: 'left',
    fontSize: 60,
    marginTop: 5,
    marginLeft: 5,
  },

  imageArrows: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: 25,
    right: 4,
  },

  cardDioxideTextAlign: {
    flexDirection: 'row',
  },

  elementsLeft: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  cardSunExposure: {
    marginTop: 20,
    width: 250,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  innerCardSunExposure: {
    flexDirection: 'row',
  },

  alignTxtInnerCardLeft: {
    marginTop: 10,
    marginLeft: 5,
    height: 75,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  txtInnerCardSmaller: {
    fontSize: 12,
  },

  alignGraph: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },

  alignCenter: {
    alignItems: 'center',
    marginRight: 4,
    marginLeft: 4,
  },

  blockSunday: {
    height: 50,
    width: 20,
    backgroundColor: '#46593F',
    borderRadius: 2,
  },

  blockMonday: {
    height: 20,
    width: 20,
    backgroundColor: '#46593F',
    borderRadius: 2,
  },

  blockTuesday: {
    height: 10,
    width: 20,
    backgroundColor: '#46593F',
    borderRadius: 2,
  },

  blockWednesday: {
    height: 50,
    width: 20,
    backgroundColor: '#46593F',
    borderRadius: 2,
  },

  blockThursday: {
    height: 25,
    width: 20,
    backgroundColor: '#46593F',
    borderRadius: 2,
  },

  blockFriday: {
    height: 40,
    width: 20,
    backgroundColor: '#46593F',
    borderRadius: 2,
  },

  blockSaturday: {
    height: 80,
    width: 20,
    backgroundColor: '#46593F',
    borderRadius: 2,
  },

  cardNutrients: {
    marginTop: 30,
    width: 120,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  txtNumberCardNutrients: {
    textAlign: 'left',
    fontSize: 45,
    marginTop: 60,
    marginLeft: 5,
  },

  blockCardNutrients: {
    width: 30,
    height: 50,
    marginBottom: 10,
    marginLeft: 5,
    backgroundColor: '#47C751',
    borderRadius: 3,
  },

  alignInnerCardNutrients: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  cardWatering: {
    marginTop: 30,
    width: 120,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: 10,
  },

  alignNutrientsAndWatering: {
    flexDirection: 'row',
  },

  txtNumberCardWatering: {
    fontSize: 90,
  },

  txtWatering: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#46593F',
  },

  flexDirectionColumn: {
    flexDirection: 'column',
  },

  phSoilIndex: {
    width: 60,
    height: 255,
    backgroundColor: '#E83D3D',
    margin: 10,
    borderRadius: 5,
  },

  cardPhSoil: {
    width: 80,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 20,
  },

  alignElements: {
    flexDirection: 'row',
  },

  alignNumberFromPhInCenter: {
    alignSelf: 'center',
  },

  txtWhite: {
    color: '#fff',
  },
});

export default Page;
