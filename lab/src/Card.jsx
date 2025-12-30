import { useState } from 'react';
import Modal from './Modal';

export default function Card() {
  const [open, setOpen] = useState(false);

  return (
    <div style={cardStyle}>
      <h3>Card Component</h3>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>Portal Modal</h2>
          <p>This modal escapes overflow hidden!</p>
          <button onClick={() => setOpen(false)}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}

const cardStyle = {
  width: '300px',
  height: '150px',
  border: '1px solid black',
  overflow: 'hidden', // ❌ gây clipping nếu không dùng Portal
  padding: '10px'
};
