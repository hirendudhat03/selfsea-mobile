import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Mentees = () => {
  return (
    <View style={styles.viewStyle}>
      <Text>Mentees</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Mentees;
