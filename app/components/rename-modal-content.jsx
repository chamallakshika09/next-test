import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

export default function RenameModalContent({ file, setSelectedFile, setIsEditDialogOpen }) {
  const [name, setName] = useState(file ? file.name : '');

  const handleRename = (e) => {
    file.name = name;

    const savedFiles = localStorage.getItem('files');
    const localStorageFiles = JSON.parse(savedFiles);
    localStorageFiles.forEach((f) => {
      if (f.id === file.id) {
        f.name = name;
      }
    });
    localStorage.setItem('files', JSON.stringify(localStorageFiles));

    setIsEditDialogOpen(false);
    setSelectedFile(null);
  };

  return (
    <>
      <Dialog.Title className="DialogTitle">Edit Name</Dialog.Title>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
        <Dialog.Close asChild>
          <button className="Button green" onClick={handleRename}>
            Save changes
          </button>
        </Dialog.Close>
      </div>
    </>
  );
}
