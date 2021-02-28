import React, { useState } from 'react';
import {
  View,
  Alert,
  Modal,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const TypePicker = (props) => {
  const [text, setText] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setText(item);
          setModalVisible(false);
          if (props.onChangeText) props.onChangeText(item);
        }}
        style={{ marginVertical: 10 }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <TextInput
          label="Texto"
          value={text}
          mode="outlined"
          editable={false}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{}}>
              <Text style={{}}>Elige un tipo</Text>
            </View>
            <FlatList
              data={['TIPO1', 'TIPO2', 'TIPO3']}
              keyExtractor={(item) => item}
              renderItem={_renderItem}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 7,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'column',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export { TypePicker };
