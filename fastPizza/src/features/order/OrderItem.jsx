import { formatCurrency } from '../../utils/helpers';
import '../../styles/order.css';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="order-item">
      <div className="order-item-content">
        <p className="order-item-name">
          <span className="order-item-quantity">{quantity}&times;</span> {name}
        </p>
        <p className="order-item-price">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;