'use client';

import { useLoaderStore } from "../../store/useLoaderStore";


export default function GlobalLoader() {
  const loading = useLoaderStore((state) => state.loading);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        width: 50,
        height: 50,
        border: '5px solid #ccc',
        borderTopColor: '#13131f',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
