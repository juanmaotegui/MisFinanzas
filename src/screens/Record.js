import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RED, GREEN, YELLOW, DARKEST_GREY, DARK_GREY } from '../colors';
import { TextInput } from 'react-native-paper';
import { TypePicker } from '../components';

function Record(props) {
  const [text, setText] = useState(null);

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: DARK_GREY }]}>
        <Text style={styles.text}>Cerrar</Text>
        <Text style={styles.text}>Guardar</Text>
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
