import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Color from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { CommonCommunityCard } from '../../common';
import { Theme } from '../../styles';

const DATA = [
  {
    alert: false,
  },
  {
    alert: true,
  },
  {
    alert: false,
  },
  {
    alert: false,
  },
  {
    alert: true,
  },
];

const MenteeCommunity = ({ navigation }) => {
  var theme = Theme();
  const [menteeCommunity, setMenteeCommunity] = useState(DATA);

  useEffect(() => {
    setMenteeCommunity(DATA);
  }, []);

  const renderItem = item => (
    <CommonCommunityCard navigation={navigation} alert={item.item.alert} />
  );

  return (
    <View style={theme.container}>
      {menteeCommunity.length === 0 ? (
        <LinearGradient
          colors={[Color.BASE_COLOR_LIGHT_BLUE, Color.COLOR_LIGHT]}
          style={theme.linearGradientHeader}>
          <View style={theme.contentView}>
            <View style={theme.blankViewStyle}>
              <Text style={theme.textStyle}>
                you haven't been assigned to any communities yet.
              </Text>
            </View>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.22)', Color.COLOR_LIGHT]}
          style={theme.linearGradient}>
          <FlatList data={menteeCommunity} renderItem={renderItem} />
        </LinearGradient>
      )}
    </View>
  );
};
export default MenteeCommunity;
