import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderMain from './components/Header';
import NewVesting from './components/NewVesting';
import WhiteList from './components/WhiteList';
import LandingPage from './components/LandingPage';
import LockForm from './components/LockForm';
import CurrentVesting from './components/CurrentVesting';
import VestingDetail from './components/VestingDetail';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
  const [data, setData] = useState();
  return (
    <AppContext.Provider value={{ data, setData }}>
      <Router>
        <div className="text-center">

          <HeaderMain />
          <Routes>
            <Route path='/'>
              <Route index element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
            </Route>
            <Route path="/newVesting" element={<NewVesting />} />

            <Route path="/currentVesting" element={<CurrentVesting />} />
            <Route path="/lockToken" element={<LockForm />} />
            <Route path="/vestingDetail/:vestingId" element={<VestingDetail />} />
            <Route path="/whitelist" element={<WhiteList />} />

          </Routes>

        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
