const DB_NAME = 'marocXploreDB';
const STORE_NAME = 'items';

let db;

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

export const saveItem = async (item) => {
  await openDB();
  const itemToSave = {
    ...item,
    created_at: new Date(),
    image: item.image && typeof item.image === 'string' ? item.image : ''
  };
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(itemToSave);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const getItems = async (type) => {
  await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      const items = request.result.filter(item => item.type === type);
      resolve(items);
    };
    request.onerror = () => reject(request.error);
  });
};

export const deleteItem = async (id) => {
  await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
};

export const saveImage = async (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `/images/uploads/${fileName}`;
      resolve(filePath);
    };
    reader.readAsDataURL(file);
  });
};