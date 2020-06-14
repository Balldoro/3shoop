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
  if (Array.isArray(ref)) {
    return Promise.all(
      ref.map(
        async singleRef => await storage.refFromURL(singleRef).getDownloadURL()
      )
    );
  } else {
    return await storage.refFromURL(ref).getDownloadURL();
  }
};

export const convertToProductObjectsFrom = async collection => {
  const items = await Promise.all(
    collection.docs.map(async doc => {
      const { name, price, imgRef, modelRef, description } = doc.data();
      const img = await fetchStorageURL(imgRef[0]);
      return { name, price, img, imgRef, modelRef, description, id: doc.id };
    })
  );
  return items;
};
