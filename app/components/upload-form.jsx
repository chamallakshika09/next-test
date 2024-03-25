'use client';

import { upload } from '@vercel/blob/client';
import { uuid } from 'uuidv4';

export default function UploadForm({ setIsDialogOpen, setFiles }) {
  const handleFileChange = async (event) => {
    if (!event.target.files || !event.target.files.length) {
      throw new Error('No file selected');
    }

    const file = event.target.files[0];

    if (file.size > 5 * 1024 * 1024) {
      setIsDialogOpen(true);
    } else {
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });

      const newFile = { name: file.name, url: newBlob.url, id: uuid() };
      setFiles((prevFiles) => [...prevFiles, newFile]);

      const savedFiles = localStorage.getItem('files');
      const localStorageFiles = JSON.parse(savedFiles);
      localStorage.setItem('files', JSON.stringify([...localStorageFiles, newFile]));
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}
    >
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
