import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const AddRecordModal = () => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(1)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[0, 300, 450]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};

export default AddRecordModal;
