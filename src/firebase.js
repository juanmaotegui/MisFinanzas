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
      list.sort(compare);
      resolve(list);
    });
  });
};

export const addRecord = (record) => {
  return new Promise(async (resolve, reject) => {
    await ref.add({
      ...record,
      date: firestore.FieldValue.serverTimestamp(),
      currency: 'UYU',
    });
    resolve(true);
  });
};

// export const addRecord = async (record) => {
//   await ref.add({
//     ...record,
//     date: firestore.FieldValue.serverTimestamp(),
//     currency: 'UYU',
//   });
// };

const compare = (a, b) => {
  if (!a || !a.date) return b;
  if (!b || !b.date) return a;
  return b.date.seconds - a.date.seconds;
};
