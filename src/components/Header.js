import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header(props) {
  return (
    <View
      style={[styles.container, { backgroundColor: props.backgroundColor }]}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});

export { Header };
