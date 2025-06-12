import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import '../../styles/order.css';


const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const username= useSelector((state)=> state.user.username)
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="create-order-container">
      <h2 className="order-title">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className="order-form">
        <div className="form-group" >
          <label className="form-label">First Name</label>
          <input  type="text" name="customer" required className="form-input"/>
        </div>

        <div className="form-group">
          <label className="form-label">Phone number</label>
          <div >
            <input className="form-input"/>
            {formErrors?.phone && (
              <p >
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <div >
            <input
            className="form-input"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="priority-container">
          <input
          className="priority-checkbox"
            type="checkbox"
            name="priority"
            id="priority"
            defaultValue={username}
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="priority-label">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary" className="order-button">
            {isSubmitting ? 'Placing order....' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
const formData= await request.formData();
const data= Object.fromEntries(formData);

const order={
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority==='on',
};



const errors={};
if(!isValidPhone(order.phone))errors.phone='Please give us your correct phone number.'
if(Object.keys(errors).length>0)return errors;
const newOrder= await createOrder(order);

return redirect(`/order/${newOrder.id}`);
// return null;
}

export default CreateOrder;