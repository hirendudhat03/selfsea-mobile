import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Book = () => {
  return (
    <View style={styles.viewStyle}>
      <Text>Tab Book</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Book;
