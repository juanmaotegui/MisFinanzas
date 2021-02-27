import React from 'react';
import { FloatingAction } from 'react-native-floating-action';

function FloatButton(props) {
  const actionOnPress = (name) => {
    const action = props.actions.filter((a) => a.name == name)[0];
    if (action.onPress) action.onPress();
  };

  return (
    <FloatingAction
      distanceToEdge={10}
      position={props.position}
      visible={props.visible}
      actions={props.actions}
      overrideWithAction={props.singleAction}
      showBackground={false}
      color={props.color}
      onPressItem={(name) => {
        actionOnPress(name);
      }}
    />
  );
}

export { FloatButton };
