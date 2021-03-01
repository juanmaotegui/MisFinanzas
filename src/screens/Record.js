import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  RED,
  GREEN,
  YELLOW,
  DARKEST_GREY,
  DARK_GREY,
  LIGHT_GREY,
} from '../colors';
import { TextInput } from 'react-native-paper';
import { TypePicker } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

function Record(props) {
  const [text, setText] = useState(null);

  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.text}>Cerrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Guardar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TextInput
          label="Descripción"
          value={text}
          onChangeText={(t) => setText(t)}
          mode="outlined"
        />
        <TextInput
          label="Monto"
          value={text}
          onChangeText={(t) => setText(t)}
          mode="outlined"
        />
        <TypePicker onChangeText={(t) => console.log(t)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DARKEST_GREY,
    flex: 1,
  },
  header: {
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  content: {
    padding: 20,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
  },
});

export { Record };
