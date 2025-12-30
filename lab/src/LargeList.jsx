import { useMemo } from 'react';
import ListItem from './ListItem';

export default function LargeList({ items, onDelete }) {

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => a.value - b.value);
  }, [items]);

  return (
    <ul>
      {sortedItems.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
