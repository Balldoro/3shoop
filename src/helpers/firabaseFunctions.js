import { db, storage } from "../firebase";

export const fetchCollection = async collection => {
  return await db.collection(collection).get();
};

export const fetchItemFromCollection = async (collection, doc) => {
  const item = await db
    .collection(collection)
    .doc(doc)
    .get();
  const itemData = { ...item.data(), id: item.id };
  return itemData;
};

export const fetchStorageURL = async ref => {
  const url = await storage.refFromURL(ref).getDownloadURL();
  return url;
};
