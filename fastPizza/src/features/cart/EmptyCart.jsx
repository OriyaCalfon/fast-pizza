import LinkButton from '../../ui/LinkButton';
import '../../styles/cart.css';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="empty-cart-message">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
