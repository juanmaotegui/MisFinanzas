import React from 'react';
import { View, Text } from 'react-native';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function Widget() {
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#254a85',
          borderRadius: 5,
          minHeight: 120,
        }}>
        <MatComIcon
          name="cash-plus"
          size={150}
          style={{
            position: 'absolute',
            right: 20,
            bottom: -15,
            color: 'rgba(0,0,0,.2)',
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={{ flex: 1.3 }}>
            <Text style={{ fontSize: 25, color: '#FFF', flex: 1 }}>
              INGRESOS
            </Text>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <Text style={{ fontSize: 35 }}>U$ 500</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}></View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#254a85',
          borderRadius: 5,
          minHeight: 120,
        }}>
        <MatComIcon
          name="cash-minus"
          size={150}
          style={{
            position: 'absolute',
            left: 90,
            bottom: -15,
            color: 'rgba(0,0,0,.2)',
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text style={{ fontSize: 25, color: '#FFF', flex: 1 }}>INGRESOS</Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text style={{ fontSize: 25 }}>U$ 500</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export { Widget };
