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

export const convertToProductObjectsFrom = async collection => {
  const items = await Promise.all(
    collection.docs.map(async doc => {
      const { name, price, imgRef, modelRef, description } = doc.data();
      const img = await fetchStorageURL(imgRef);
      return { name, price, img, modelRef, description, id: doc.id };
    })
  );
  return items;
};
