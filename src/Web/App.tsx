import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import appRoutes from './routes';
import Router from '../Infra/Navigation/Router';
import AppHeader from './Components/Header/AppHeader';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

  const [opened, setOpened] = useState(false);

  const openSidebar = () => {
    setOpened(!opened)
  }

  return (
    <BrowserRouter>
      <React.Suspense fallback={<></>}>
        <div className="App">
          <div>
            <AppHeader openSidebar={openSidebar}></AppHeader>
            <Router routes={appRoutes} />
          </div>
          <Sidebar isVisible={opened} closeSidebar={() => setOpened(false)}></Sidebar>
        </div>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
