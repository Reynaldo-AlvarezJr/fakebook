import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user = null;
  return (
    // BEM  naming convention
    <div className="app">
{/* if there's a user the app will pop-up */}
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />

              <Feed />

              <Widgets />

            </div>

          </>
        )}

    </div>
  );
}

export default App;

// npm install -g firebase-tools
