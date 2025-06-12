import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import '../../styles/menu.css';
import '../../index.css';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className={`menu-item ${soldOut ? 'sold-out' : ''}`}>
      <img src={imageUrl} alt={name} className="menu-item-image" />
      <div className="menu-item-content">
        <p className="menu-item-name">{name}</p>
        <p className="menu-item-ingredients">
          {ingredients.join(', ')}
        </p>
        <div className="menu-item-footer">
          {!soldOut ? (
            <p className="menu-item-price">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="menu-item-soldout">Sold out</p>
          )}

          {isInCart && (
            <div className="menu-item-actions">
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>Add to cart</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
