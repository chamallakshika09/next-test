'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        style={{
          width: '100px',
          height: '30px',
          border: '1px solid black',
          padding: '0 20px',
          fontSize: '1rem',
          textAlign: 'center',
          color: '#ffffff',
          backgroundColor: '#008CBA',
        }}
      >
        Try again
      </button>
    </div>
  );
}
