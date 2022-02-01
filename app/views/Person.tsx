import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Person = () => {
  return (
    <View style={styles.viewStyle}>
      <Text>Tab Person</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Person;
