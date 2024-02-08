import { CartItem } from "./CartItem";

export function Cart({ cartItems, onClickTrash }) {
  return (
    <div>
      <h2 className="text-4xl dark:text-white font-bold mb-5">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </div>
  );
}
