import { useState, useCallback } from 'react';
import LargeList from './LargeList';

export default function Dashboard() {
  const [theme, setTheme] = useState('light');
  const [items, setItems] = useState(
    Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      value: Math.random()
    }))
  );

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []); // ✅ function reference ổn định

  return (
    <div className={theme}>
      <h2>Dashboard</h2>

      <button onClick={() =>
        setTheme(theme === 'light' ? 'dark' : 'light')
      }>
        Toggle Theme
      </button>

      <LargeList items={items} onDelete={handleDelete} />
    </div>
  );
}
