import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Color from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { CommonCommunityCard } from '../common';
import { Theme } from '../assets/styles';

const Person = ({ navigation }) => {
  var theme = Theme();

  const renderItem = item => (
    <CommonCommunityCard navigation={navigation} alert={item.item.alert} />
  );

  return (
    <SafeAreaView style={theme.container}>
      <LinearGradient
        colors={[Color.BASE_COLOR_LIGHT_BLUE, Color.COLOR_LIGHT]}
        style={theme.linearGradientHeader}>
        <View style={theme.contentView}>
          <View style={theme.blankViewStyle}>
            <Text style={theme.textStyle}>Profiles WIP.</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Person;
