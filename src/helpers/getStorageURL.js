import { storage } from "../firebase";

async function getStorageURL(ref) {
  const url = await storage.refFromURL(ref).getDownloadURL();
  return url;
}

export default getStorageURL;
