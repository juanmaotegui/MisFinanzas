import React from 'react';
import { Alert, View } from 'react-native';
import { Widget } from '../components';
import { RED, GREEN, YELLOW, DARKEST_GREY } from '../colors';

function Dashboard(props) {
  return (
    <View style={{ backgroundColor: DARKEST_GREY, flex: 1 }}>
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
        onPress={() => props.navigation.navigate('Expenses')}
      />
      <Widget
        valueColor={YELLOW}
        header="Deudas"
        value="U$ 9.375"
        onPress={() => props.navigation.navigate('Debts')}
      />
    </View>
  );
}

export { Dashboard };
