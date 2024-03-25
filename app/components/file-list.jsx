import React, { useEffect, useState } from 'react';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import SkeletonLoader from './skeleton-loader';

export default function FileList({ files, onRename, onDelete, setSelectedFile }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [files]);

  if (isLoading) {
    return <SkeletonLoader count={5} />;
  }

  const handleRename = (file) => {
    setSelectedFile(file);
    onRename(true);
  };

  const handleDelete = (file) => {
    onDelete(file);
    setSelectedFile(null);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '25%' }}
    >
      <h1 style={{ marginBottom: '16px' }}>File List</h1>
      {files.map((file, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            width: '100%',
          }}
        >
          <a href={file.url} download style={{ marginRight: '40px' }}>
            {file.name}
          </a>
          <div>
            <button
              onClick={() => handleRename(file)}
              style={{
                marginRight: '8px',
                all: 'unset',
                fontFamily: 'inherit',
                borderRadius: '4px',
                height: 35,
                width: 35,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                backgroundColor: 'transparent',
                boxShadow: `0 2px 10px rgba(0,0,0,0.1)`,
                '&:hover': { backgroundColor: '#f0f0f0' },
                '&:focus': { boxShadow: `0 0 0 2px black` },
                cursor: 'pointer',
              }}
            >
              <Pencil1Icon />
            </button>
            <button
              onClick={() => handleDelete(file)}
              style={{
                all: 'unset',
                fontFamily: 'inherit',
                borderRadius: '4px',
                height: 35,
                width: 35,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                backgroundColor: 'transparent',
                boxShadow: `0 2px 10px rgba(0,0,0,0.1)`,
                '&:hover': { backgroundColor: '#f0f0f0' },
                '&:focus': { boxShadow: `0 0 0 2px black` },
                cursor: 'pointer',
              }}
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
