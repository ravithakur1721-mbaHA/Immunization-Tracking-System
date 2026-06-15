import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.location.replace('/dashboard.html');
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Inter, sans-serif',
      background: '#faf9f5',
      color: '#6c6a64',
      fontSize: '14px'
    }}>
      Loading Immunization Dashboard…
    </div>
  );
}