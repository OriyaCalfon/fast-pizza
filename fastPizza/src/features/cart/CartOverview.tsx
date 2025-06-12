import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import '../../styles/cart.css';

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQunatity = useSelector(getTotalCartQuantity);
  if (!totalCartQunatity) return null;

  return (
    <div className="cart-overview">
      <p className="cart-overview-summary">
        <span>{totalCartQunatity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="cart-overview-link">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
