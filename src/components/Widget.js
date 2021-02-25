import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RED, GREEN, YELLOW } from '../colors';

function Widget() {
  return (
    <ScrollView>
      <View
        style={{
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
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderColor: '#6e6e6e',
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#FFF',
                paddingBottom: 5,
                flex: 1,
              }}>
              INGRESOS
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#cfcfcf',
                  paddingBottom: 5,
                }}>
                FEBRERO
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: GREEN,
              }}>
              U$ 148.560
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
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
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderColor: '#6e6e6e',
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#FFF',
                paddingBottom: 5,
                flex: 1,
              }}>
              GASTOS
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#cfcfcf',
                  paddingBottom: 5,
                }}>
                FEBRERO
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: RED,
              }}>
              - U$ 120.450
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
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
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: '#FFF',
              paddingBottom: 5,
              borderColor: '#6e6e6e',
              borderBottomWidth: 0.3,
            }}>
            DEUDAS
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: YELLOW,
              }}>
              U$ 8.560
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export { Widget };
