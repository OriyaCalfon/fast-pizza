import React from 'react'
import { getOrder } from '../../services/apiRestaurant'
import { useLoaderData } from 'react-router-dom';

function Order() {

    const order = useLoaderData();

    return (
        <>
            <div>{order}</div>
            <p>order</p>
        </>
    )
}

export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}


export default Order