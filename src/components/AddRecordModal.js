import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { addRecord } from '../firebase';
import BottomSheet from 'reanimated-bottom-sheet';

const AddRecordModal = forwardRef((props, ref) => {
  const sheetRef = useRef(null);
  const [title, setTitle] = useState(null);
  const [amount, setAmount] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [creditor, setCreditor] = useState(null);

  useImperativeHandle(ref, () => ({
    open() {
      sheetRef.current.snapTo(1);
    },
  }));

  const newRecord = () => {
    const record = {
      title,
      amount,
      creditor,
      type: props.type,
      currency,
    };
    addRecord(record).then((resp) => {
      props.onClose();
    });

    setTitle(null);
    setAmount(null);

    sheetRef.current.snapTo(0);
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        height: 300,
      }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Agregar registro</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingresa el título"
          style={styles.input}
          maxLength={30}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingresa el monto"
          keyboardType="number-pad"
          style={styles.input}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          onSubmitEditing={() => newRecord()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="CONFIRMAR"
          style={styles.button}
          onPress={() => newRecord()}
        />
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[0, 320]}
      renderContent={renderContent}
      renderHeader={renderHeader}
      onCloseEnd={props.onClose}
      onOpenEnd={props.onOpen}
      onOpenStart={props.onOpen}
      enabledContentTapInteraction={false}
    />
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  inputContainer: {
    borderBottomColor: '#00000040',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export { AddRecordModal };
