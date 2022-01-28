import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TabScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text>Tab strat screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default TabScreen;
