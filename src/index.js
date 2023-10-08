import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import InputValuesProvider from './context/InputValuesProvider';
import BibleSettingProvider from './context/BibleSettingProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <InputValuesProvider>
            <BibleSettingProvider>
              <App />
            </BibleSettingProvider>
          </InputValuesProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
