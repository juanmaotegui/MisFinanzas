import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Widget(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      disabled={!props.onPress}>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgb(42,43,47)',
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
    fontSize: 23,
    fontFamily: 'Nunito-Regular',
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
    fontFamily: 'Nunito-Regular',
  },
  value: {
    fontSize: 35,
    fontFamily: 'Nunito-Regular',
  },
});

Widget.propTypes = {
  valueColor: PropTypes.string,
  rightText: PropTypes.string,
  header: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func,
};

export { Widget };
