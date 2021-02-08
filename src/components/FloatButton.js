import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import { RED } from '../colors';

export default function FloatButton(props) {
  const actionOnPress = (name) => {
    const action = props.actions.filter((a) => a.name == name)[0];
    if (action.onPress) action.onPress();
  };

  return (
    <FloatingAction
      visible={props.visible}
      actions={props.actions}
      overrideWithAction={props.singleAction}
      onPressItem={(name) => {
        actionOnPress(name);
      }}
    />
  );
}
