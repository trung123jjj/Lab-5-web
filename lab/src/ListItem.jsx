import React from 'react';

function ListItem({ item, onDelete }) {
  console.log('Rendering ListItem:', item.id);
  return (
    <li>
      {item.value}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
}

export default React.memo(ListItem);
