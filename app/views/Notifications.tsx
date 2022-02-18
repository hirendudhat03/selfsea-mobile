import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Color from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../styles';

const Notifications = ({ navigation }) => {
  var theme = Theme();
  console.log(navigation);
  return (
    <SafeAreaView style={theme.container}>
      <LinearGradient
        colors={[Color.BASE_COLOR_LIGHT_BLUE, Color.COLOR_LIGHT]}
        style={theme.linearGradientHeader}>
        <View style={theme.contentView}>
          <View style={theme.blankViewStyle}>
            <Text style={theme.textStyle}>there are no notifications yet</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Notifications;
