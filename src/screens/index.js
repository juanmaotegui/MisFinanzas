import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList, Button, TextInput } from 'react-native';
import Record from './Record';

function Incomes() {
  const [title, setTitle] = useState(null);
  const [amount, setAmount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [incomes, setIncomes] = useState([]);

  const ref = firestore().collection('records');

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { Title, Date, Amount, Type } = doc.data();
        list.push({
          id: doc.id,
          title: Title,
          date: Date,
          amount: Amount,
          type: Type,
        });
      });
      console.log(list);
      setIncomes(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  async function addIncome() {
    await ref.add({
      Title: title,
      Amount: amount,
      Date: firestore.FieldValue.serverTimestamp(),
      Type: 0,
    });
    setTodo('');
  }

  if (loading) {
    return null;
  }

  return (
    <>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Titulo"
      />
      <TextInput
        value={amount}
        onChangeText={(text) => setAmount(text)}
        placeholder="Monto"
      />
      <Button title="Agregar" onPress={() => addIncome()} />

      <FlatList
        style={{ flex: 1 }}
        data={incomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Record {...item} />}
      />
    </>
  );
}

export default Incomes;
