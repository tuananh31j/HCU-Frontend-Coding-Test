import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import QueryProvider from '~/contexts/QueryProvider.tsx';
import './configs/env.ts';
import ReduxProvider from '~/contexts/ReduxProvider.tsx';
import { ToastContainer } from 'react-toastify';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryProvider>
                <ReduxProvider>
                    <App />
                    <ToastContainer position='bottom-right' />
                </ReduxProvider>
            </QueryProvider>
        </BrowserRouter>
    </StrictMode>
);
