import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';

import UserProfile from './UserProfile';
import Cart from './Cart';
import LoadingSpinner from './LoadingSpinner';
import TabsDemo from './TabsDemo';
import Card from './Card'; // ✅ IMPORT CARD (PORTAL DEMO)

// Lazy load component nặng
const AdminPanel = lazy(() => import('./AdminPanel'));
const Dashboard = lazy(() => import('./Dashboard'));

function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleParentClick = () => {
    console.log('Parent div clicked!');
  };

  return (
    // ✅ Parent để test event bubbling của Portal
    <div onClick={handleParentClick}>
      <UserProfile />
      <hr />

      <Cart />
      <hr />

      {/* ✅ PORTAL MODAL DEMO */}
      <Card />
      <hr />

      {/* ✅ CHỈ LOAD DASHBOARD KHI USER MUỐN */}
      {!showDashboard && (
        <button onClick={() => setShowDashboard(true)}>
          Load Dashboard (Heavy Component)
        </button>
      )}

      {showDashboard && (
        <>
          <hr />
          <Suspense fallback={<LoadingSpinner />}>
            <Dashboard />
          </Suspense>
        </>
      )}

      <hr />

      <TabsDemo />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/admin">Admin</Link>
      </nav>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
