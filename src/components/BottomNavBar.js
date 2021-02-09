import React from 'react';
import { View, Text } from 'react-native';
import FloatButton from './FloatButton';

export default function BottomNavBar(props) {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 65,
          left: 0,
          width: '79%',
          backgroundColor: '#53d2db',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}></View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: 65,
          width: '19%',
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          backgroundColor: '#215bbf',
        }}>
        {/* <FloatButton /> */}
      </View>
    </>
  );
}
