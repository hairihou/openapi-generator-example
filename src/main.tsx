import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const enableMocking = async (): Promise<void> => {
  if (!import.meta.env.DEV) {
    return;
  }

  const { worker } = await import('./mocks/browser');
  void (await worker.start());
};

enableMocking()
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(() => undefined);
