import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const container = document.getElementById('root')!;
const root = createRoot(container);
const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
            cacheTime: Infinity,

        },
        mutations: {
            cacheTime: Infinity
        }
    }
})

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
