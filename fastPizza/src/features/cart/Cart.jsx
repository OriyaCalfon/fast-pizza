import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import '../../styles/cart.css';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="cart-container">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="cart-heading">Your cart, {username}</h2>

      <ul className="cart-list">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="cart-actions">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
