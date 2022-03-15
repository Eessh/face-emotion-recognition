import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { DashboardContextProvider } from './components/Dashboard';
import { SettingsContextProvider } from './components/Settings';
// import reportWebVitals from './reportWebVitals';

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));

ReactDOM.render(
  <BrowserRouter>
    <DashboardContextProvider>
      <SettingsContextProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={
            <React.Suspense fallback={<>Loading Fallback ...</>}>
              <Dashboard />
            </React.Suspense>
          } />
        </Routes>
      </SettingsContextProvider>
    </DashboardContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
