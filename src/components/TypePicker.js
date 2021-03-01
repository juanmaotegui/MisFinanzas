import React, { useState } from 'react';
import {
  View,
  Alert,
  Modal,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { DARK_GREY, WHITE } from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        style={{ marginVertical: 10, flexDirection: 'row' }}>
        <Icon
          name="cash-plus"
          size={25}
          color={WHITE}
          style={{ marginRight: 15 }}
        />
        <Text style={{ color: WHITE, fontSize: 17 }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <TextInput
          label="Tipo"
          value={text}
          mode="outlined"
          editable={false}
          right={
            <TextInput.Icon
              onPress={() => setModalVisible(true)}
              name={() => <Icon name="menu-down" size={23} color={WHITE} />}
            />
          }
        />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPressOut={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <View style={{}}>
                  <Text
                    style={{ color: WHITE, fontSize: 19, marginBottom: 15 }}>
                    Elige un tipo
                  </Text>
                </View>
                <FlatList
                  data={['Ingreso', 'Gasto', 'Deuda']}
                  keyExtractor={(item) => item}
                  renderItem={_renderItem}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: 20,
  },
  modalView: {
    backgroundColor: DARK_GREY,
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
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export { TypePicker };
