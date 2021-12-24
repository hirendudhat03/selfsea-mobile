import { StyleSheet, Switch as RNSwitch, Text, View } from 'react-native';
import Color from '../theme/colors';
import React from 'react';
import Font from '../theme/fonts';

interface Props {
  text?: string;
  onEnableToggle: () => void;
  isEnabled: boolean;
}

const styles = StyleSheet.create({
  toggleLabel: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'right',
    color: Color.BASE_COLOR_WHITE,
    alignSelf: 'center',
    marginHorizontal: 3,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default function Switch({ onEnableToggle, isEnabled, text }: Props) {
  return (
    <View style={styles.container}>
      {text ? <Text style={styles.toggleLabel}>{text}</Text> : null}
      <RNSwitch
        trackColor={{ false: '#ffffff', true: '#008400' }}
        thumbColor={Color.BASE_COLOR_WHITE}
        ios_backgroundColor="#ffffff"
        onValueChange={onEnableToggle}
        value={isEnabled}
      />
    </View>
  );
}
