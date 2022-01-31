import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Color from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { CommonCommunityCard } from '../common';
import { Theme } from '../assets/styles';

const DATA = [{
  "alert":false
}, {
  "alert":true
},{
  "alert":false
},{
  "alert":false
},{
  "alert":true
}];

const Bell = ({ navigation }) => {
  var theme = Theme();
  const [menteeCommunity, setMenteeCommunity] = useState([DATA]);

  const renderItem = (item) => (
    <CommonCommunityCard navigation={navigation} alert={item.item.alert} />
  );

  return (
    <SafeAreaView style={theme.container}>
        <LinearGradient
          colors={[Color.BASE_COLOR_LIGHT_BLUE, Color.COLOR_LIGHT]}
          style={theme.linearGradientHeader}>
          <View style={theme.contentView}>
            <View style={theme.blankViewStyle}>
              <Text style={theme.textStyle}>
                There is no notifications yet.
              </Text>
            </View>
          </View>
        </LinearGradient>
    </SafeAreaView>
  );
};
export default Bell;
