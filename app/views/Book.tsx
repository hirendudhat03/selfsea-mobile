import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Color from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../styles';

const Book = ({ navigation }) => {
  var theme = Theme();
  console.log(navigation);
  return (
    <SafeAreaView style={theme.container}>
      <LinearGradient
        colors={[Color.BASE_COLOR_LIGHT_BLUE, Color.COLOR_LIGHT]}
        style={theme.linearGradientHeader}>
        <View style={theme.contentView}>
          <View style={theme.blankViewStyle}>
            <Text style={theme.textStyle}>There is no books yet.</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Book;
