import firebase, { db } from "./config";

export const addDocument = (collection, data) => {
  const query = db
    .collection(collection)
    .add({
      ...data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
};
