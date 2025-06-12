import React from 'react'
import { getOrder } from '../../services/apiRestaurant'
import { useLoaderData } from 'react-router-dom';
import '../../styles/order.css';

function Order() {

    const order = useLoaderData();

    return (
        <>
            <div className="order-display">{order}</div>
            <p>order</p>
        </>
    )
}

export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}


export default Order