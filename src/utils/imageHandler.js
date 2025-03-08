import { saveItem } from './database.js';

const ALLOWED_TYPES = ['image/jpeg', 'image/png'];
const MAX_SIZE = 500 * 1024; // 500KB
const MIN_RESOLUTION = { width: 800, height: 600 };
const UPLOAD_DIR = '/public/images/uploads/';

const validateImage = (file) => {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('Only JPG/JPEG and PNG images are allowed');
  }
  if (file.size > MAX_SIZE) {
    throw new Error('Image size must be less than 500KB');
  }
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      if (img.width < MIN_RESOLUTION.width || img.height < MIN_RESOLUTION.height) {
        throw new Error(`Image resolution must be at least ${MIN_RESOLUTION.width}x${MIN_RESOLUTION.height}`);
      }
      resolve(true);
    };
    img.src = URL.createObjectURL(file);
  });
};

const saveImageFile = async (file) => {
  await validateImage(file);
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${UPLOAD_DIR}${fileName}`;
  const formData = new FormData();
formData.append('file', file);
const response = await fetch('/api/upload', {
  method: 'POST',
  body: formData
});
if (!response.ok) {
  throw new Error('File upload failed');
}
  return filePath;
};

export const uploadImage = async (file, itemData) => {
  const imagePath = await saveImageFile(file);
  const itemWithImage = {
    ...itemData,
    image: imagePath
  };
  return await saveItem(itemWithImage);
};