import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bell = () => {
  return (
    <View style={styles.viewStyle}>
      <Text>Tab bell</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Bell;
