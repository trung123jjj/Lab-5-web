import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart, selectCartTax } from './store/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);
  const tax = useSelector(selectCartTax);

  const product = {
    id: 1,
    name: 'Laptop',
    price: 1000
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button onClick={() => dispatch(addItem(product))}>
        Add Laptop
      </button>

      <button onClick={() => dispatch(removeItem(product.id))}>
        Remove Laptop
      </button>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>

      <p>Total: ${totalAmount}</p>
      <p>Tax (10%): ${tax}</p>
    </div>
  );
}
