import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const All = () => {
  return (
    <View style={styles.viewStyle}>
      <Text> All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default All;
