import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const AddRecordModal = forwardRef((props, ref) => {
  const sheetRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
      sheetRef.current.snapTo(1);
    },
    getAlert() {
      alert('getAlert from Child');
    },
  }));

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        height: 300,
        zIndex: 9999,
      }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Agregar registro</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingresa el título"
          style={styles.input}
          maxLength={30}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingresa el monto"
          keyboardType="number-pad"
          style={styles.input}
          maxLength={30}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="CONFIRMAR" style={styles.button} />
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

  /* <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(1)}
        /> */

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[0, 320]}
      borderRadius={10}
      renderContent={renderContent}
      renderHeader={renderHeader}
    />
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f7f5eee8',
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

export default AddRecordModal;
