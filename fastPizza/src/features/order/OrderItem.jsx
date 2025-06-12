import { formatCurrency } from '../../utils/helpers';
import '../../styles/order.css';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="order-item">
      <div className="item-header">
        <p>
          <span className="item-quantity">{quantity}&times;</span> {name}
        </p>
        <p className="item-price">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="item-ingredients">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
