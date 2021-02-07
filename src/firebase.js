import firestore from '@react-native-firebase/firestore';

const ref = firestore().collection('records');

export const getRecords = (filter) => {
  return new Promise((resolve, reject) => {
    ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { title, date, amount, type, creditor, currency } = doc.data();

        if (type == filter) {
          list.push({
            id: doc.id,
            title,
            date,
            amount,
            type,
            creditor,
            currency,
          });
        }
      });
      resolve(list);
    });
  });
};

export const addRecord = async (record) => {
  await ref.add({ ...record, date: firestore.FieldValue.serverTimestamp() });
};
