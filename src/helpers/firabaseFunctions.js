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
      const { name, price, imgRef, modelRef, credits } = doc.data();
      const img = await fetchStorageURL(imgRef[0]);
      return { name, price, img, imgRef, modelRef, credits, id: doc.id };
    })
  );
  return items;
};

export const fetchProduct = async (category, product) => {
  const collection = category;
  const doc = product;
  const item = await fetchItemFromCollection(collection, doc);
  item.img = await fetchStorageURL(item.imgRef);
  item.model = await fetchStorageURL(item.modelRef);
  item.path = `${category}/${product}`;
  return item;
};
