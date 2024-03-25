'use client';

import { useEffect, useState } from 'react';
import UploadForm from './upload-form';
import Modal from './modal';
import UploadModalContent from './upload-modal-conetnt';
import FileList from './file-list';
import RenameModalContent from './rename-modal-content';

export default function FileContainer() {
  const [files, setFiles] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    const savedFiles = localStorage.getItem('files');
    if (savedFiles) {
      setFiles(JSON.parse(savedFiles));
    }
  }, []);

  const handleDelete = (file) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.id !== file.id));

    const savedFiles = localStorage.getItem('files');
    const localStorageFiles = JSON.parse(savedFiles);
    localStorage.setItem('files', JSON.stringify(localStorageFiles.filter((f) => f.id !== file.id)));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <UploadForm setIsDialogOpen={setIsDialogOpen} setFiles={setFiles} />
      <Modal onClose={setIsDialogOpen} open={isDialogOpen} Content={<UploadModalContent />} />
      <FileList
        files={files}
        onDelete={handleDelete}
        setSelectedFile={setSelectedFile}
        onRename={setIsEditDialogOpen}
      />
      <Modal
        onClose={setIsEditDialogOpen}
        open={isEditDialogOpen}
        Content={
          <RenameModalContent
            file={selectedFile}
            setSelectedFile={setSelectedFile}
            setIsEditDialogOpen={setIsEditDialogOpen}
          />
        }
      />
    </div>
  );
}
