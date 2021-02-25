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
          borderRadius: 5,
          minHeight: 120,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
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
            <Text
              style={{
                fontSize: 25,
                color: '#FFF',
                flex: 1,
                borderColor: '#FFF',
              }}>
              INGRESOS
            </Text>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{ fontSize: 35, fontWeight: 'bold', color: '#00f7ff' }}>
                U$ 500
              </Text>
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
          backgroundColor: 'rgb(41,38,56)',
          borderRadius: 5,
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
            <Text
              style={{ fontSize: 35, fontWeight: 'bold', color: '#00f7ff' }}>
              U$ 500
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
            INGRESOS
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={{ flex: 1 }}>
              {/* <MatComIcon
                name="cash-minus"
                size={100}
                style={{
                  top: -15,
                  right: 20,
                  position: 'absolute',
                  color: 'rgba(0,0,0,.2)',
                }}
              /> */}
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
                U$ 500
              </Text>
            </View>
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
            GASTOS
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={{ flex: 1 }}>
              {/* <MatComIcon
                name="cash-minus"
                size={100}
                style={{
                  top: -15,
                  right: 20,
                  position: 'absolute',
                  color: 'rgba(0,0,0,.2)',
                }}
              /> */}
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
                - U$ 500
              </Text>
            </View>
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
              flexDirection: 'row',
            }}>
            <View style={{ flex: 1 }}>
              {/* <MatComIcon
                name="cash-minus"
                size={100}
                style={{
                  top: -15,
                  right: 20,
                  position: 'absolute',
                  color: 'rgba(0,0,0,.2)',
                }}
              /> */}
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
                  color: YELLOW,
                }}>
                U$ 500
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export { Widget };
