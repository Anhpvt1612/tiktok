import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './component/GlobalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
const originalWarn = console.warn;

console.warn = (...args) => {
    if (args[0]?.includes('React Router Future Flag Warning')) {
        return; // Bỏ qua cảnh báo cụ thể này
    }
    originalWarn(...args); // Gọi lại các cảnh báo khác
};
    
root.render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
