import { useFetcher, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import OrderItem from './OrderItem';
import UpdateOrder from './UpdateOrder';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import '../../styles/order.css';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="order-container">
      <div className="order-header">
        <h2 className="order-title">Order #{id} status</h2>
        <div className="order-status-tags">
          {priority && <span className="priority-tag">Priority</span>}
          <span className="status-tag">{status} order</span>
        </div>
      </div>

      {/* <div className="order-delivery-box">
        <p className="delivery-time">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left`
            : 'Order should have arrived'}
        </p>
        <p className="delivery-estimate">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div> */}

      <ul className="order-items-list">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="order-summary">
        <p className="summary-item">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="summary-item">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="summary-total">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
