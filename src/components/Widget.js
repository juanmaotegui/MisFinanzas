import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Widget(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <Text style={styles.header}>{props.header}</Text>
          <View style={styles.header_right}>
            <Text style={styles.text}>{props.rightText}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={[styles.value, { color: props.valueColor }]}>
            {props.value}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgb(41,38,56)',
    borderRadius: 10,
    minHeight: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#6e6e6e',
    borderBottomWidth: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  header: {
    fontSize: 25,
    color: '#FFF',
    paddingBottom: 5,
    flex: 1,
  },
  header_right: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 15,
    color: '#cfcfcf',
    paddingBottom: 5,
  },
  value: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export { Widget };
