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
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { addRecord } from '../firebase';
import BottomSheet from 'reanimated-bottom-sheet';
import { DARK_GREY, WHITE, TURQUOISE, PURPLE } from '../colors';

const height = Dimensions.get('window').height;

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
    if (!title || !amount) {
      props.onClose();
      sheetRef.current.snapTo(0);
    } else {
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
    }
  };

  const renderContent = () => (
    <KeyboardAvoidingView enabled={true}>
      <View
        style={{
          backgroundColor: DARK_GREY,
          padding: 20,
          height: 230,
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Agregar registro</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Ingresa el título"
            style={styles.input}
            placeholderTextColor={WHITE}
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
            placeholderTextColor={WHITE}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            onSubmitEditing={() => newRecord()}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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
      snapPoints={[0, 250]}
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
    backgroundColor: DARK_GREY,
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
    backgroundColor: PURPLE,
    marginBottom: 10,
  },
  inputContainer: {
    borderBottomColor: TURQUOISE,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  input: {
    color: WHITE,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: WHITE,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export { AddRecordModal };
