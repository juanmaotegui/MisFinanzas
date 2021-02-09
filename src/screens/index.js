import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList, Button, TextInput } from 'react-native';
import Record from './Record';

function Prueba() {
  const [title, setTitle] = useState(null);
  const [amount, setAmount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [incomes, setIncomes] = useState([]);

  const ref = firestore().collection('records');

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { title, date, amount, type } = doc.data();
        list.push({
          id: doc.id,
          title,
          date,
          amount,
          type,
        });
      });

      setIncomes(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  async function addIncome() {
    await ref.add({
      title: title,
      amount: amount,
      date: firestore.FieldValue.serverTimestamp(),
      type: 0,
    });
    setTitle(null);
    setAmount(null);
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
        data={incomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Record {...item} />}
      />
    </>
  );
}

export default Prueba;
