import React from 'react';
import { requireNativeComponent, View } from 'react-native';

const WheelPickerView = requireNativeComponent('WheelPicker', null);

class ScrollPicker extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    style: {
      width: 'auto',
      height: 150,
    },
  };

  onItemSelected = (event) => {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(event.nativeEvent.position);
    }
  };

  render() {
    const { isCyclic, data } = this.props;
    return (
      <View pointerEvents={this.props.disabled ? 'none' : 'auto'}>
        <WheelPickerView
          {...this.props}
          isCyclic={data.length > 2 ? isCyclic : false}
          onChange={this.onItemSelected}
        />
      </View>
    );
  }
}

export { ScrollPicker };
