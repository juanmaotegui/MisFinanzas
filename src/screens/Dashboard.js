import React from 'react';
import { View } from 'react-native';
import { Widget } from '../components';
import { RED, GREEN, YELLOW } from '../colors';

function Dashboard(props) {
  return (
    <View style={{ backgroundColor: 'rgb(40,36,57)', flex: 1 }}>
      <Widget
        valueColor={GREEN}
        header="Ingresos"
        rightText="FEBRERO"
        value="U$ 149.560"
        onPress={() => props.navigation.navigate('Incomes')}
      />
      <Widget
        valueColor={RED}
        header="Gastos"
        rightText="FEBRERO"
        value="- U$ 53.120"
      />
      <Widget valueColor={YELLOW} header="Deudas" value="U$ 9.375" />
    </View>
  );
}

export { Dashboard };
